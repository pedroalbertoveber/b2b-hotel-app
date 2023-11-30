// Core
import React from 'react'
import ReactDOM from 'react-dom/client'

// App
import { App } from './App.tsx'

// Providers
import { Providers } from './Providers'

// Styles
import './styles/globals.css'

// Aws Config
import '@aws-amplify/ui-react/styles.css'
import '@/config/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
