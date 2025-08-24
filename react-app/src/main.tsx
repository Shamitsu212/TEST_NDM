import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/globalstyles/index.css'
import './assets/globalstyles/reset.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
