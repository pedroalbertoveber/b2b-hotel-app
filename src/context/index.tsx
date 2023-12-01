import { AvailEntityContextProvider } from './AvailEntityContext'
import { HotelChainEntityContextProvider } from './HotelChainEntityContext'
import { HotelEntityContextProvider } from './HotelEntityContext'

export default function ContextWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AvailEntityContextProvider>
      <HotelChainEntityContextProvider>
        <HotelEntityContextProvider>{children}</HotelEntityContextProvider>
      </HotelChainEntityContextProvider>
    </AvailEntityContextProvider>
  )
}
