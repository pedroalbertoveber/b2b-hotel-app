'use client'

import type { ReactNode } from 'react'

// Contenxts
import { SidebarContextProvider } from './context/Sidebar'

// Auth
import AppProvider from '@/infra/AuthProvider'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppProvider>
      <SidebarContextProvider>{children}</SidebarContextProvider>
    </AppProvider>
  )
}
