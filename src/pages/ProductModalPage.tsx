import { useParams, useNavigate } from 'react-router-dom'
import { useProductStore } from '../entities/product/store'
import { useCartStore } from '../entities/cart/model'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {useTelegramMainButton} from "../hooks/useTelegramMainButton.ts";
import {useCallback} from "react";

export const ProductModalPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const addToCart = useCartStore(state => state.addToCart)

    const product = useProductStore(state =>
        state.getById(id!)
    )

    const handleClose = () => {
        navigate(-1)
    }

    const handleAddToCart = useCallback(() => {
        if (!product) return

        const tg = window.Telegram?.WebApp
        tg?.HapticFeedback?.impactOccurred('medium')

        addToCart(product)
    }, [product, addToCart, navigate])

    useTelegramMainButton(
        'Добавить в корзину',
        handleAddToCart,
        !!product
    )

    const tg = window.Telegram?.WebApp
    const hasMainButton = !!tg?.MainButton

    if (!product) return null

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => navigate(-1)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="absolute bottom-0 left-0 right-0 mx-auto
               w-full max-w-md bg-[var(--bg)]
               rounded-t-2xl p-4"
                onClick={e => e.stopPropagation()}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 280 }}

                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.15}

                onDragEnd={(_, info) => {
                    if (info.offset.y > 120 || info.velocity.y > 800) {
                        handleClose()
                    }
                }}
            >
                <div className="flex justify-end mb-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-[var(--hint)] cursor-pointer"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                <div className="w-full aspect-[3/4] max-h-[55vh] overflow-hidden rounded-xl">
                    <img
                        src={product.image}
                        className="w-full h-full object-cover"
                        alt={product.title}
                    />
                </div>

                <h2 className="mt-3 text-lg font-semibold">
                    {product.title}
                </h2>

                <p className="mt-1 text-sm text-[var(--hint)]">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold">
                        {product.price} {product.currency}
                    </span>

                    {!hasMainButton && (
                        <button
                            onClick={() => addToCart(product)}
                            className="px-4 py-2 rounded-xl
                                       bg-[var(--accent)]
                                       text-[var(--accent-text)]
                                       font-medium
                                       cursor-pointer"
                        >
                            Добавить в корзину
                        </button>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}
