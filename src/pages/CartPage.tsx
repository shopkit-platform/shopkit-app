import { useCartStore } from '../entities/cart/model'
import {FaMinus, FaPlus, FaTrash} from 'react-icons/fa'
import {useTelegramMainButton} from "../hooks/useTelegramMainButton.ts";
import {AnimatePresence, motion} from "framer-motion";

export const CartPage = () => {
    const { items, removeFromCart, decreaseQuantity, addToCart } = useCartStore()

    useTelegramMainButton(
        'Оформить заказ',
        () => {
            console.log('checkout')
        },
        items.length > 0
    )

    if (!items.length) {
        return (
            <div className="p-4 text-center text-[var(--hint)]">
                Корзина пуста
            </div>
        )
    }

    return (
        <div className="p-4 space-y-3">
            <AnimatePresence>
                {items.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div
                            key={item.id}
                            className="
                                flex items-center gap-3
                                bg-[var(--secondary-bg)]
                                p-2 rounded-xl
                            "
                        >
                            <img
                                src={item.image}
                                className="w-12 h-12 rounded-lg object-cover"
                                alt={item.title}
                            />

                            <div className="flex-1">
                                <div className="text-sm font-medium">
                                    {item.title}
                                </div>
                                <div className="text-xs text-[var(--hint)]">
                                    {item.quantity} × {item.price} ₽
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    window.Telegram?.WebApp
                                        ?.HapticFeedback
                                        ?.impactOccurred('light')
                                    decreaseQuantity(item.id)
                                }}
                                className="p-2 text-[var(--hint)] cursor-pointer"
                            >
                                <FaMinus />
                            </button>

                            <button
                                onClick={() => {
                                    window.Telegram?.WebApp
                                        ?.HapticFeedback
                                        ?.impactOccurred('light')
                                    addToCart(item)
                                }}
                                className="p-2 text-[var(--hint)] cursor-pointer"
                            >
                                <FaPlus />
                            </button>

                            <button
                                onClick={() => {
                                    window.Telegram?.WebApp
                                        ?.HapticFeedback
                                        ?.impactOccurred('medium')
                                    removeFromCart(item.id)
                                }}
                                className="text-[var(--hint)] cursor-pointer"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
