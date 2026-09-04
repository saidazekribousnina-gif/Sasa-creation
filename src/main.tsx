import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Analytics } from '@vercel/analytics/react'
import { LanguageProvider } from './i18n/LanguageContext'
import { initMetaPixel } from './lib/metaPixel'
import './index.css'
import App from './App.tsx'

// Meta Pixel — chargé uniquement si l'ID est configuré (Vercel env)
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined
if (metaPixelId) {
  initMetaPixel(metaPixelId)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
        <Analytics />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
