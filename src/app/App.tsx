import {Routes, Route, useLocation} from 'react-router-dom'
import {Header} from "../components/Header.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {CartPage} from "../pages/CartPage.tsx";
import {ProductModalPage} from "../pages/ProductModalPage.tsx";


const App = () => {
    const location = useLocation()
    const state = location.state as { background?: string }

    const backgroundLocation = state?.background
        ? { pathname: state.background }
        : null

    return (
        <>
            <Header />
            <Routes location={backgroundLocation || location}>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>

            {backgroundLocation && (
                <Routes>
                    <Route path="/product/:id" element={<ProductModalPage />} />
                </Routes>
            )}
        </>
    )
}

export default App