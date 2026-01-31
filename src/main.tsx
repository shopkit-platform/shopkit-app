import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import {TelegramProvider} from "./app/providers/TelegramProvider.tsx";
import './main.css'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TelegramProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TelegramProvider>
    </StrictMode>
)