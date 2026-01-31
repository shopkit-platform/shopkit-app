import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHome } from 'react-icons/fa'
import { useCartStore } from '../entities/cart/model'

export const Header = () => {
    const itemsCount = useCartStore(
        state => state.items.reduce((sum, item) => sum + item.quantity, 0)
    )

    return (
        <header
            className="
                flex items-center justify-between
                px-4 py-2
                border-b
            "
            style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--tg-theme-separator-color)',
            }}
        >
            <Link
                to="/"
                className="
                    flex items-center justify-center
                    w-10 h-10
                    rounded-full
                    active:scale-95
                    transition
                "
                style={{ backgroundColor: 'var(--secondary-bg)' }}
            >
                <FaHome size={36} style={{ color: 'var(--text)' }} />
            </Link>
            <Link
                to="/cart"
                className="
                    relative
                    flex items-center justify-center
                    w-10 h-10
                    rounded-full
                    active:scale-95
                    transition
                "
                style={{ backgroundColor: 'var(--secondary-bg)' }}
            >
                <FaShoppingCart size={36} style={{ color: 'var(--text)' }} />
                {itemsCount > 0 && (
                    <span
                        className="
                            absolute -top-1 -right-1
                            min-w-[18px] h-[18px]
                            px-1
                            rounded-full
                            text-xs
                            flex items-center justify-center
                        "
                        style={{
                            backgroundColor: 'var(--accent)',
                            color: 'var(--accent-text)',
                        }}
                    >
                        {itemsCount}
                    </span>
                )}
            </Link>
        </header>
    )
}