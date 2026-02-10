import {Routes, Route, useLocation} from 'react-router-dom'
import {Header} from "../components/Header.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {CartPage} from "../pages/CartPage.tsx";
import {ProductModalPage} from "../pages/ProductModalPage.tsx";
import {useEffect} from "react";
import {useShopStore} from "../entities/shop/model.ts";
import {initShop} from "./initShop.ts";
import {AnimatePresence} from "framer-motion";


const App = () => {
    const location = useLocation()
    const state = location.state as { background?: Location } | null

    const backgroundLocation = state?.background ?? null

    const { isLoading, error } = useShopStore()

    useEffect(() => {
        initShop()
    }, [])

    if (isLoading) {
        return <div>Загрузка магазина…</div>
    }

    if (error) {
        if (error === 'SHOP_NOT_FOUND') {
            return <div>❌ Магазин не найден</div>
        }

        return <div>Ошибка запуска</div>
    }

    return (
        <>
            <Header />
            <Routes location={backgroundLocation || location}>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductModalPage />} />
            </Routes>

            <AnimatePresence mode="wait">
                {backgroundLocation && (
                    <Routes location={location} key={location.pathname}>
                        <Route
                            path="/product/:id"
                            element={<ProductModalPage />}
                        />
                    </Routes>
                )}
            </AnimatePresence>
        </>
    )
}

export default App