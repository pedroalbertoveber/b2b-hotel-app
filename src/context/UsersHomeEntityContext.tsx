import React, { useContext, useEffect } from 'react'

import '@/config'
import Entities from '@/entities'
import UsersHomeEntity from '@/entities/UsersHomeEntity/UsersHomeEntity'

interface UsersHomeEntityContextProps {
  UsersHome: UsersHomeEntity
}

const UsersHomeEntityContext = React.createContext(
  {} as UsersHomeEntityContextProps,
)

export function UsersHomeEntityContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const entities = Entities()
  const {
    UsersHome,
  }: {
    UsersHome: UsersHomeEntity
  } = entities

  useEffect(() => {
    UsersHome.getUsersHome()
  }, [])

  return (
    <UsersHomeEntityContext.Provider
      value={{
        UsersHome,
      }}
    >
      {children}
    </UsersHomeEntityContext.Provider>
  )
}

export const useUsersHomeEntityContext = () => {
  const context = useContext(UsersHomeEntityContext)

  return context
}
