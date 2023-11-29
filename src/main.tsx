// Core
import React from 'react'
import ReactDOM from 'react-dom/client'

// App
import { App } from './App.tsx'

// Styles
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
