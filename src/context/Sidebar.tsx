// Core
import { createContext, ReactNode, useState, useContext } from 'react'

type SidebarContextProps = {
  isOpended: boolean
  handleToggleMenu: () => void
}

export const SidebarContext = createContext<SidebarContextProps | null>(null)

export function SidebarContextProvider({ children }: { children: ReactNode }) {
  const screenWidht: number = window.innerWidth

  const isMd = screenWidht > 768

  const [isOpended, setIsOpened] = useState(isMd)

  function handleToggleMenu() {
    setIsOpened((prevState) => !prevState)
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpended,
        handleToggleMenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error(
      'useSidebarContext must be used within an SidebarContextProvider',
    )
  }

  return context
}
