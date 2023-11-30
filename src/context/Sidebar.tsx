import { createContext, ReactNode, useState, useContext } from 'react'

type SidebarContextProps = {
  currentOpenedHotel: string | null
  handleChangeOpenedHotel: (hotel: string) => void
}

export const SidebarContext = createContext<SidebarContextProps | null>(null)

export function SidebarContextProvider({ children }: { children: ReactNode }) {
  const [currentOpenedHotel, setCurrentOpenedHotel] = useState<string | null>(
    null,
  )

  function handleChangeOpenedHotel(hotel: string) {
    if (currentOpenedHotel === hotel) {
      return setCurrentOpenedHotel(null)
    } else {
      setCurrentOpenedHotel(hotel)
    }
  }

  return (
    <SidebarContext.Provider
      value={{
        currentOpenedHotel,
        handleChangeOpenedHotel,
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
