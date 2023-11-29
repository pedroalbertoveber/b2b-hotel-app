// Core
import { createContext, useContext, useState, type ReactNode } from 'react'

// Assets
import LogoPng from '@/assets/images/dark-logo.png'

// Components
import * as Collapsible from '@radix-ui/react-collapsible'

// Icons
import { CaretDown } from '@phosphor-icons/react'
import { HotelChainIcon, HotelNavIcon } from '@/common/icons'

// Libs
import { Link, LinkProps } from 'react-router-dom'

const mock = ['Hotel do Mickey', 'Hotel do Pateta', 'Hotel do Pluto']

export function Sidebar() {
  return (
    <SidebarContextProvider>
      <aside className="bg-sidebar fixed bottom-0 left-0 top-0 z-10 w-[260px] px-4">
        <div className="flex w-full items-center justify-start py-8">
          <img src={LogoPng} alt="Logo" />
        </div>

        <div className="flex w-full items-center justify-between border-y border-white/10 px-3 py-4">
          <div className="flex items-center gap-4">
            <img
              src="https://github.com/diego3g.png"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />

            <span className="text-white">Fulano de Tal</span>
          </div>

          <CaretDown className="text-white" />
        </div>

        <nav className="mt-10 flex w-full flex-col">
          <Collapsible.Root className="w-full space-y-2">
            <Collapsible.Trigger className="group flex w-full items-center justify-between rounded-md px-3 py-4 duration-150 hover:bg-white/10 data-[state=open]:bg-white/10">
              <div className="flex items-center gap-4">
                <HotelChainIcon />

                <span className="text-white">Disney Hotéis</span>
              </div>

              <CaretDown className="text-white duration-150 group-data-[state=open]:rotate-180" />
            </Collapsible.Trigger>

            <Collapsible.Content>
              {mock.map((hotel) => (
                <HotelMenu hotel={hotel} key={hotel} />
              ))}
            </Collapsible.Content>
          </Collapsible.Root>
        </nav>
      </aside>
    </SidebarContextProvider>
  )
}

type HotelMenuProps = {
  hotel: string
}

export function HotelMenu({ hotel }: HotelMenuProps) {
  const { currentOpenedHotel, handleChangeOpenedHotel } = useSidebarContext()

  const isOpen = currentOpenedHotel === hotel

  function handleOpenOrCloseHotelMenu() {
    handleChangeOpenedHotel(hotel)
  }

  return (
    <Collapsible.Root className="w-full space-y-2" open={isOpen}>
      <Collapsible.Trigger
        onClick={handleOpenOrCloseHotelMenu}
        className="group flex w-full items-center justify-between rounded-md bg-transparent px-3 py-4 hover:bg-white/10 data-[state=open]:bg-white/10"
      >
        <div className="flex items-center gap-4">
          <HotelNavIcon />

          <span className="text-white">{hotel}</span>
        </div>

        <CaretDown className="text-white duration-150 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content className="w-full space-y-1">
        <NavItem isActive to="details">
          Detalhes
        </NavItem>

        <NavItem to="/uh">UHs</NavItem>

        <NavItem to="/policies">Políticas</NavItem>

        <NavItem to="/taxes">Tarifas</NavItem>

        <NavItem to="/invetary">Inventário</NavItem>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

type NavItemProps = LinkProps & {
  isActive?: boolean
  isDisbled?: boolean
}

export function NavItem({
  isActive = false,
  isDisbled = false,
  ...props
}: NavItemProps) {
  return (
    <Link
      data-disabled={isDisbled}
      data-active={isActive}
      className="flex items-start rounded-md bg-transparent py-2 pl-12 pr-4 text-white duration-150 data-[active=true]:cursor-auto data-[disabled=true]:cursor-auto data-[active=true]:bg-primary data-[disabled=true]:opacity-50 data-[disabled=false]:data-[active=false]:hover:bg-primary"
      {...props}
    />
  )
}

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
