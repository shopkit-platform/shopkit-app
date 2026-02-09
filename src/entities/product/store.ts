import { create } from 'zustand'
import type { Product } from './model'
import { fetchProducts } from '../../api/product'
import { useShopStore } from '../shop/model'

type ProductState = {
    products: Product[]
    isLoading: boolean
    error: string | null

    loadProducts: () => Promise<void>
    getById: (id: string) => Product | undefined
}

export const useProductStore = create<ProductState>((set, get) => ({
    products: [],
    isLoading: false,
    error: null,

    loadProducts: async () => {
        const shopId = useShopStore.getState().shopId
        if (!shopId) return

        set({ isLoading: true, error: null })

        try {
            const products = await fetchProducts(shopId)
            set({ products })
        } catch (e) {
            set({ error: 'PRODUCTS_LOAD_FAILED' })
        } finally {
            set({ isLoading: false })
        }
    },

    getById: id =>
        get().products.find(p => p.id === id),
}))
