import { create } from 'zustand'
import type { Product } from './model'
import { fetchProducts } from './api'

type ProductState = {
    products: Product[]
    isLoaded: boolean
    loadProducts: () => Promise<void>
    getById: (id: string) => Product | undefined
}

export const useProductStore = create<ProductState>((set, get) => ({
    products: [],
    isLoaded: false,

    loadProducts: async () => {
        if (get().isLoaded) return

        const products = await fetchProducts()
        set({ products, isLoaded: true })
    },

    getById: (id) =>
        get().products.find(p => String(p.id) === id),
}))
