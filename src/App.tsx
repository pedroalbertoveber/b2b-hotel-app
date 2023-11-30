// React Router
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'

// Components
import { Sidebar } from './components/ApplicationCore/Sidebar'
import { Header } from './components/ApplicationCore/Header'

// Contexts
import { useSidebarContext } from './context/Sidebar'

export function App() {
  const { isOpended } = useSidebarContext()

  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Header />

        <Sidebar />

        <main
          data-sidebar={isOpended ? 'opened' : 'closed'}
          className="ml-auto mt-[64px] w-full bg-background md:data-[sidebar=closed]:w-[calc(100vw-80px)] md:data-[sidebar=opened]:w-[calc(100vw-260px)]"
        >
          <Router />
        </main>
      </BrowserRouter>
    </div>
  )
}
