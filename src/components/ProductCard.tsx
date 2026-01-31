import {Link} from 'react-router-dom'
import type {Product} from '../entities/product/model'
import {useCartStore} from "../entities/cart/model.ts";

export const ProductCard = ({product}: { product: Product }) => {
    const addToCart = useCartStore(state => state.addToCart)

    return (
        <div
            className="
                block
                bg-[var(--secondary-bg)]
                rounded-xl
                p-2
                overflow-hidden
                hover:shadow-md transition-shadow
            "
        >
            <Link
                to={`/product/${product.id}`}
                state={{ background: location.pathname }}
            >
                <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mx-auto ">
                    <img
                        src={product.image}
                        alt="product image"
                        className="
                            w-full h-full
                            object-cover
                        "
                    />
                </div>

                <div className="mt-2 text-sm font-medium line-clamp-2">
                    {product.title}
                </div>

                <div className="text-sm text-[var(--hint)]">
                    {product.price} ₽
                </div>
            </Link>
            <button
                onClick={() => addToCart(product)}
                className="
                            my-2
                            w-full
                            px-2 py-2
                            rounded-xl
                            bg-[var(--accent)]
                            text-[var(--accent-text)]
                            font-medium
                            cursor-pointer
                        "
            >
                Добавить в корзину
            </button>
        </div>
    )
}
