// React Router
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'

// Components
import { Sidebar } from '@/components/core/Sidebar'
import { Header } from './components/core/Header'

// Contexts
import { useSidebarContext } from './context/Sidebar'

// Libs
import { motion as m } from 'framer-motion'

export function App() {
  const { isOpended } = useSidebarContext()

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Header />

        <Sidebar />

        <m.main
          animate={{
            width: isOpended ? 'calc(100vw - 260px)' : 'calc(100vw - 80px)',
          }}
          data-sidebar={isOpended ? 'opened' : 'closed'}
          className="ml-auto mt-[64px] bg-background "
        >
          <Router />
        </m.main>
      </BrowserRouter>
    </div>
  )
}
