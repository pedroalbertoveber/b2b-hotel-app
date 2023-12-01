import { AvailEntityContextProvider } from './AvailEntityContext'
import { HotelChainEntityContextProvider } from './HotelChainEntityContext'
import { HotelEntityContextProvider } from './HotelEntityContext'
import { UsersHomeEntityContextProvider } from './UsersHomeEntityContext'

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AvailEntityContextProvider>
      <HotelChainEntityContextProvider>
        <HotelEntityContextProvider>
          <UsersHomeEntityContextProvider>
            {children}
          </UsersHomeEntityContextProvider>
        </HotelEntityContextProvider>
      </HotelChainEntityContextProvider>
    </AvailEntityContextProvider>
  )
}
