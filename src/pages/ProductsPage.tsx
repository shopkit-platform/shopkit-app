import { useEffect } from 'react'
import { useProductStore } from '../entities/product/store'
import { ProductCard } from '../components/ProductCard'

export const ProductsPage = () => {
    const { products, loadProducts, isLoading, error } = useProductStore()

    useEffect(() => {
        loadProducts()
    }, [])

    if (isLoading) {
        return <div className="p-4 text-center">Загрузка товаров…</div>
    }

    if (error) {
        return <div className="p-4 text-center">Ошибка загрузки товаров</div>
    }

    return (
        <div className="p-4 grid grid-cols-2 gap-3 mx-auto">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
