import { Link } from 'react-router-dom'
import type { Product } from '../entities/product/model'
import { useCartStore } from '../entities/cart/model'

export const ProductCard = ({ product }: { product: Product }) => {
    const addToCart = useCartStore(state => state.addToCart)

    return (
        <div className="bg-[var(--secondary-bg)] rounded-xl p-2">
            <Link to={`/product/${product.id}`}>
                <div className="w-full aspect-[3/4] overflow-hidden rounded-lg">
                    {product.image && (
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <div className="mt-2 text-sm font-medium line-clamp-2">
                    {product.title}
                </div>

                <div className="text-sm text-[var(--hint)]">
                    {product.price} {product.currency}
                </div>
            </Link>

            <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full px-2 py-2 rounded-xl
                           bg-[var(--accent)] text-[var(--accent-text)]"
            >
                Добавить в корзину
            </button>
        </div>
    )
}
