import React, { useContext, useEffect } from 'react'

import '@/config'
import Entities from '@/entities'
import AvailEntity from '@/entities/AvailEntity/AvailEntity'

interface AvailEntityContextProps {
  Avail: AvailEntity
}

const AvailEntityContext = React.createContext({} as AvailEntityContextProps)

export function AvailEntityContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const entities = Entities()
  const {
    Avail,
  }: {
    Avail: AvailEntity
  } = entities

  useEffect(() => {}, [])

  return (
    <AvailEntityContext.Provider
      value={{
        Avail,
      }}
    >
      {children}
    </AvailEntityContext.Provider>
  )
}

export const useAvailEntityContext = () => {
  const context = useContext(AvailEntityContext)

  return context
}
