import { useEffect } from 'react'
import { useProductStore } from '../entities/product/store'
import { ProductCard } from '../components/ProductCard'

export const ProductsPage = () => {
    const { products, loadProducts } = useProductStore()

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="p-4 grid grid-cols-2 gap-3 mx-auto">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}