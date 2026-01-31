import { create } from 'zustand'
import type { Product } from '../product/model'

type CartItem = Product & {
    quantity: number
}

type CartState = {
    items: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: string) => void
    decreaseQuantity: (id: string) => void
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addToCart: (product) => {
        const items = get().items
        const existing = items.find(i => i.id === product.id)

        if (existing) {
            set({
                items: items.map(i =>
                    i.id === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            })
        } else {
            set({
                items: [...items, { ...product, quantity: 1 }]
            })
        }
    },

    decreaseQuantity: (id) => {
        set(state => ({
            items: state.items
                .map(item =>
                    item.id === id
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )
                .filter(item => item.quantity > 0),
        }))
    },

    removeFromCart: (id) => {
        set({
            items: get().items.filter(i => i.id !== id)
        })
    }
}))
