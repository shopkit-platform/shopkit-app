export {}

declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                MainButton: {
                    show: () => void
                    hide: () => void
                    setText: (text: string) => void
                    onClick: (cb: () => void) => void
                    offClick: (cb: () => void) => void
                    setParams?: (params: { is_active?: boolean }) => void
                }
                HapticFeedback?: {
                    impactOccurred: (style: 'light' | 'medium' | 'heavy') => void
                }
            }
        }
    }
}
