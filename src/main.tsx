import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { ThemeProvider } from './context/ThemeContext.tsx'
import React from 'react'
import { LanguageProvider } from './context/LanguageContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <ThemeProvider> */}
            <LanguageProvider>
                <App />
            </LanguageProvider>
        {/* </ThemeProvider> */}
    </React.StrictMode>
)
