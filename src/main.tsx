import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import {TelegramProvider} from "./app/providers/TelegramProvider.tsx";
import './main.css'
import {BrowserRouter} from "react-router-dom";

const redirect = new URLSearchParams(window.location.search).get('redirect')
if (redirect) {
    window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TelegramProvider>
            <BrowserRouter basename={"/shopkit-app"}>
                <App />
            </BrowserRouter>
        </TelegramProvider>
    </StrictMode>
)