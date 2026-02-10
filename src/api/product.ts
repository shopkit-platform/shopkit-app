import type { Product } from '../entities/product/model'

const API_BASE = 'https://shopkit-backend.onrender.com/api'

type ProductApiResponse = {
    product_id: string
    title: string
    price: number
    currency: string
    image_url?: string
    description?: string
    stock_count: number
    category: string
}

export const fetchProducts = async (shopId: number): Promise<Product[]> => {
    const res = await fetch(`${API_BASE}/products/${shopId}`)

    if (!res.ok) {
        throw new Error('Failed to load products')
    }

    const data: ProductApiResponse[] = await res.json()

    return data.map(p => ({
        id: p.product_id,
        title: p.title,
        price: p.price,
        currency: p.currency,
        description: p.description,
        image: p.image_url,
        stockCount: p.stock_count,
        category: p.category,
    }))
}
