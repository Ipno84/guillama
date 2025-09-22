import './assets/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@renderer/App'

const entry = document.getElementById('root')

if (entry) {
  const root = createRoot(entry)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
