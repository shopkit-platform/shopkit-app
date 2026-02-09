const API_BASE = 'https://shopkit-backend.onrender.com/api'

type ShopByTokenResponse = {
    id: number
    title: string
    shop_token: string
}

export const getShopByToken = async (
    shopToken: string
): Promise<ShopByTokenResponse> => {
    const res = await fetch(`${API_BASE}/shops/token/${shopToken}`)

    if (!res.ok) {
        if (res.status === 404) {
            throw new Error('SHOP_NOT_FOUND')
        }

        throw new Error('FAILED_TO_LOAD_SHOP')
    }

    return res.json()
}
