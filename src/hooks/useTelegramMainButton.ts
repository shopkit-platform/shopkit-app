import {useEffect} from "react";

export const useTelegramMainButton = (
    text: string,
    onClick: () => void,
    isVisible: boolean
) => {
    useEffect(() => {
        const tg = window.Telegram?.WebApp
        if (!tg) return

        tg.MainButton.setText(text)
        tg.MainButton.setParams?.({ is_active: isVisible })

        if (isVisible) {
            tg.MainButton.show()
        } else {
            tg.MainButton.hide()
        }

        tg.MainButton.onClick(onClick)

        return () => {
            tg.MainButton.offClick(onClick)
        }
    }, [text, onClick, isVisible])
}
