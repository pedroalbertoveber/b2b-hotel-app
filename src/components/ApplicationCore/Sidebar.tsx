// Components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'

// Icons
import { FaBed, FaUserCog } from 'react-icons/fa'
import { PiSealWarningFill } from 'react-icons/pi'
import { MdPolicy, MdBookOnline, MdApartment } from 'react-icons/md'
import { HotelChainIcon, User, Dropdown, NavHotel } from '@/common/icons'

// Libs
import { Link, LinkProps } from 'react-router-dom'

// Contexts
import { useSidebarContext } from '@/context/Sidebar'

export function Sidebar() {
  const { isOpended } = useSidebarContext()

  return (
    <aside
      data-opened={isOpended}
      className="group fixed bottom-0 left-0 top-0 z-10 bg-sidebar px-4 data-[opened=false]:w-auto data-[opened=true]:w-full data-[opened=false]:translate-x-[-92px] data-[opened=true]:translate-x-0 md:data-[opened=false]:w-[80px] md:data-[opened=true]:w-[260px] md:data-[opened=false]:translate-x-0"
    >
      <div className="mt-[64px] flex w-full items-center justify-between border-y border-primary-900/50 py-5">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent object-cover shadow-sidebar-button duration-150 hover:bg-background active:opacity-50"
          >
            <User />
          </button>

          <span
            data-state={isOpended ? 'opened' : 'closed'}
            className="text-white data-[state=closed]:sr-only"
          >
            Fulano de Tal
          </span>
        </div>
      </div>

      <nav className="mt-4 flex w-full flex-col gap-2">
        <Collapsible className="w-full space-y-2">
          <CollapsibleTrigger
            data-sidebar={isOpended ? 'opened' : 'closed'}
            className="group flex w-full items-center justify-between rounded-md bg-white/10 py-2 duration-150 data-[state=open]:bg-white/10 data-[sidebar=closed]:px-2 data-[sidebar=opened]:px-3"
          >
            <div
              data-state={isOpended ? 'opened' : 'closed'}
              className="flex items-center gap-4 data-[state=closed]:gap-0"
            >
              <HotelChainIcon size={20} />

              <span
                data-state={isOpended ? 'opened' : 'closed'}
                className="uppercase text-white data-[state=closed]:sr-only"
              >
                Disney Hotéis
              </span>

              <Dropdown />
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <NavItem isActive to="/">
              <span className="group-data-[state=closed]:sr-only">
                Detalhes
              </span>

              <PiSealWarningFill
                className="text-white group-data-[state=opened]:sr-only"
                weight="fill"
                size={24}
              />
            </NavItem>

            <NavItem to="/hotelChain/hotels">
              <span className="group-data-[state=closed]:sr-only">Hotéis</span>
              <FaBed
                className="text-white group-data-[state=opened]:sr-only"
                weight="fill"
                size={24}
              />
            </NavItem>

            <NavItem to="/hotelChain/policy">
              <span className="group-data-[state=closed]:sr-only">
                Políticas
              </span>
              <MdPolicy
                className="text-white group-data-[state=opened]:sr-only"
                weight="fill"
                size={24}
              />
            </NavItem>

            <NavItem to="/hotelChain/reserves">
              <span className="group-data-[state=closed]:sr-only">
                Minhas Reservas
              </span>
              <MdBookOnline
                className="text-white group-data-[state=opened]:sr-only"
                weight="fill"
                size={24}
              />
            </NavItem>

            <NavItem to="hotelChain/clients">
              <span className="group-data-[state=closed]:sr-only">
                Clientes
              </span>
              <FaUserCog
                className="text-white group-data-[state=opened]:sr-only"
                weight="fill"
                size={24}
              />
            </NavItem>

            <NavItem to="hotelChain/chain">
              <span className="group-data-[state=closed]:sr-only">Rede</span>
              <MdApartment
                className="text-white group-data-[state=opened]:sr-only"
                weight="fill"
                size={24}
              />
            </NavItem>
          </CollapsibleContent>
        </Collapsible>

        <Link
          data-sidebar={isOpended ? 'opened' : 'closed'}
          data-active={false}
          to="#"
          className="group flex w-full items-center gap-4 rounded-md bg-white/10 py-2 duration-150 data-[sidebar=closed]:w-full data-[sidebar=open]:justify-start data-[sidebar=closed]:justify-center data-[sidebar=open]:bg-white/10 data-[sidebar=closed]:px-0 data-[sidebar=opened]:px-3"
        >
          <NavHotel />

          <div
            data-state={isOpended ? 'opened' : 'closed'}
            className="flex items-center justify-center gap-2 data-[state=closed]:hidden"
          >
            <span className="text-white">Channel Manager</span>

            <PiSealWarningFill size={24} className="text-white" />
          </div>
        </Link>
      </nav>
    </aside>
  )
}

type NavItemProps = LinkProps & {
  isActive?: boolean
  isDisabled?: boolean
}

export function NavItem({
  isActive = false,
  isDisabled = false,
  ...props
}: NavItemProps) {
  const { isOpended } = useSidebarContext()

  return (
    <Link
      {...props}
      data-state={isOpended ? 'opened' : 'closed'}
      data-disabled={isDisabled}
      data-active={isActive}
      className="group flex items-start rounded-md bg-transparent py-2 pl-12 pr-4 text-white duration-150 data-[active=true]:cursor-auto data-[disabled=true]:cursor-auto data-[state=closed]:justify-center data-[active=true]:bg-secondary data-[state=closed]:px-0 data-[state=opened]:pl-12 data-[disabled=true]:opacity-50 data-[disabled=false]:data-[active=false]:hover:bg-secondary"
    />
  )
}
