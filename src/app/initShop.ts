import { useShopStore } from '../entities/shop/model'
import { getShopByToken } from '../api/shop'

export const initShop = async () => {
    const store = useShopStore.getState()

    try {
        const tg = window.Telegram?.WebApp

        //FOR DEPLOYMENT
        if (!tg) throw new Error('NOT_IN_TELEGRAM')

        const shopToken = tg.initDataUnsafe?.start_param

        //FOR DEVELOPMENT
        // @ts-ignore
        //const shopToken = tg.initDataUnsafe?.start_param || 'coffee_shop_4321'

        if (!shopToken) throw new Error('NO_SHOP_TOKEN')

        const shop = await getShopByToken(shopToken)

        store.setShop({
            shopToken: shop.shop_token,
            shopId: shop.id,
            title: shop.title,
        })
    } catch (e) {
        store.setError(
            e instanceof Error ? e.message : 'UNKNOWN_ERROR'
        )
    }
}
