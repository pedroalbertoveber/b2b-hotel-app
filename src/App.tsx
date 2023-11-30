// React Router
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from '@/infra/AuthProvider'

import '@aws-amplify/ui-react/styles.css'
import '@/config/index'

// Components
import { Sidebar } from '@/components/ApplicationCore/Sidebar'
import { Header } from './components/ApplicationCore/Header'

export function App() {
  return (
    <AppProvider>
      <div className="flex flex-col">
        <Header />
        <div className="flex">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <BrowserRouter>
            <main className="mt-[64px] w-full bg-background lg:ml-auto lg:w-[calc(100vw-260px)]">
              <Router />
            </main>
          </BrowserRouter>
        </div>
      </div>
    </AppProvider>
  )
}
