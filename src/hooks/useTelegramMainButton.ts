import { useEffect } from 'react'

export const useTelegramMainButton = (
    text: string,
    onClick: () => void,
    visible: boolean
) => {
    useEffect(() => {
        const tg = window.Telegram?.WebApp
        if (!tg) return

        const button = tg.MainButton

        if (!visible) {
            button.hide()
            return
        }

        button.setText(text)
        button.show()
        button.onClick(onClick)

        return () => {
            button.offClick(onClick)
            button.hide()
        }
    }, [text, onClick, visible])
}
