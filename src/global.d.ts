export {}

declare global {
    interface Window {
        Telegram?: {
            WebApp: TelegramWebApp
        }
    }

    interface TelegramWebApp {
        initDataUnsafe?: {
            start_param?: string
            user?: {
                id: number
                first_name?: string
                last_name?: string
                username?: string
            }
        }

        ready?: () => void
        expand?: () => void

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

