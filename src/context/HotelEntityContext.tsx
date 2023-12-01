import React, { useContext, useEffect } from 'react'

import '@/config'
import Entities from '@/entities'
import HotelEntity from '@/entities/HotelEntity/HotelEntity'

interface HotelEntityContextProps {
  Hotel: HotelEntity
}

const HotelEntityContext = React.createContext({} as HotelEntityContextProps)

export function HotelEntityContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const entities = Entities()
  const {
    Hotel,
  }: {
    Hotel: HotelEntity
  } = entities

  useEffect(() => {}, [])

  return (
    <HotelEntityContext.Provider
      value={{
        Hotel,
      }}
    >
      {children}
    </HotelEntityContext.Provider>
  )
}

export const useHotelEntityContext = () => {
  const context = useContext(HotelEntityContext)

  return context
}
