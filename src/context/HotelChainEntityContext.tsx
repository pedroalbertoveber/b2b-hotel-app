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

  useEffect(() => {
    if (entities.UsersHome.hook.hotelsChain.alphaId) {
      HotelChain.getRatePolicies(entities.UsersHome.hook.hotelsChain.alphaId)
    }
  }, [entities.UsersHome.hook.hotelsChain.alphaId])

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
