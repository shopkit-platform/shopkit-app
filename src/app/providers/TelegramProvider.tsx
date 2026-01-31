import { createContext, useContext, useEffect, type ReactNode } from 'react'
import WebApp from '@twa-dev/sdk'

type TelegramContextValue = {
    user: typeof WebApp.initDataUnsafe.user | null
    startParam?: string
    colorScheme: 'light' | 'dark'
}

const TelegramContext = createContext<TelegramContextValue | null>(null)

type TelegramProviderProps = {
    children: ReactNode
}

export function TelegramProvider({ children }: TelegramProviderProps) {
    useEffect(() => {
        WebApp.ready()
        WebApp.expand()
    }, [])

    const value: TelegramContextValue = {
        user: WebApp.initDataUnsafe.user ?? null,
        startParam: WebApp.initDataUnsafe.start_param,
        colorScheme: WebApp.colorScheme
    }

    return (
        <TelegramContext.Provider value={value}>
            {children}
        </TelegramContext.Provider>
    )
}

export function useTelegram() {
    const ctx = useContext(TelegramContext)
    if (!ctx) {
        throw new Error('useTelegram must be used inside TelegramProvider')
    }
    return ctx
}