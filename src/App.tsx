// React Router
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'

// Components
import { Sidebar } from '@/components/Sidebar'
import { Header } from './components/Header'

export function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Header />
      <main className="ml-auto mt-[73px] w-[calc(100vw-260px)] bg-background">
        <Router />
      </main>
    </BrowserRouter>
  )
}
