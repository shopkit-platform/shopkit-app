import { useParams, useNavigate } from 'react-router-dom'
import { useProductStore } from '../entities/product/store'
import { useCartStore } from '../entities/cart/model'
import { FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import {useTelegramMainButton} from "../hooks/useTelegramMainButton.ts";

export const ProductModalPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const addToCart = useCartStore(state => state.addToCart)

    const product = useProductStore(state =>
        state.getById(id!)
    )

    useTelegramMainButton(
        'Добавить в корзину',
        () => {
            if (!product) return

            const tg = window.Telegram?.WebApp
            tg?.HapticFeedback?.impactOccurred('medium')

            addToCart(product)
            navigate(-1)
        },
        !!product
    )

    if (!product) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 bg-black/40"
                onClick={() => navigate(-1)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-md
                               bg-[var(--bg)] rounded-t-2xl p-4"
                    onClick={e => e.stopPropagation()}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
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
                            {product.price} ₽
                        </span>

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
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
