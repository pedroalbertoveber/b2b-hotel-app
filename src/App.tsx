// React Router
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from '@/infra/AuthProvider'

import '@aws-amplify/ui-react/styles.css'
import '@/config/index'

// Components
import { Sidebar } from '@/components/core/Sidebar'
import { Header } from './components/core/Header'

export function App() {
  return (
    <AppProvider>
      <div className="flex flex-col">
        <Header />
        <div className="flex">
          <Sidebar />
          <BrowserRouter>
            <main className="ml-auto mt-[64px] w-[calc(100vw-260px)] bg-background">
              <Router />
            </main>
          </BrowserRouter>
        </div>
      </div>
    </AppProvider>
  )
}
