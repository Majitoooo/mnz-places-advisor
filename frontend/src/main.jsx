import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APP_ENV } from './config/environment'

// En DEV, QA y LOCAL la pestaña del navegador muestra el ambiente, p. ej. "[QA] ..."
if (APP_ENV.showBanner) {
  document.title = `[${APP_ENV.label}] ${document.title}`
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
