import React, { useContext, useEffect } from 'react'

import '@/config'
import Entities from '@/entities'
import HotelChainEntity from '@/entities/HotelChainEntity/HotelChainEntity'

interface HotelChainEntityContextProps {
  HotelChain: HotelChainEntity
}

const HotelChainEntityContext = React.createContext(
  {} as HotelChainEntityContextProps,
)

export function HotelChainEntityContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const entities = Entities()
  const {
    HotelChain,
  }: {
    HotelChain: HotelChainEntity
  } = entities

  useEffect(() => {}, [])

  return (
    <HotelChainEntityContext.Provider
      value={{
        HotelChain,
      }}
    >
      {children}
    </HotelChainEntityContext.Provider>
  )
}

export const useHotelChainEntityContext = () => {
  const context = useContext(HotelChainEntityContext)

  return context
}
