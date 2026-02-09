import { create } from 'zustand'

type ShopState = {
    shopToken: string | null
    shopId: number | null
    title: string | null

    isLoading: boolean
    error: string | null

    setShop: (shop: {
        shopToken: string
        shopId: number
        title: string
    }) => void

    setError: (error: string) => void
}

export const useShopStore = create<ShopState>(set => ({
    shopToken: null,
    shopId: null,
    title: null,

    isLoading: true,
    error: null,

    setShop: shop =>
        set({
            shopToken: shop.shopToken,
            shopId: shop.shopId,
            title: shop.title,
            isLoading: false,
            error: null,
        }),

    setError: error =>
        set({
            error,
            isLoading: false,
        }),
}))
