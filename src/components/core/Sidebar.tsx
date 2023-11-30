// Assets
import LogoPng from '@/assets/images/dark-logo.png'

// Components

// Icons
import { CaretDown } from '@phosphor-icons/react'
import { HotelChainIcon } from '@/common/icons'

// Libs
import { Link, LinkProps } from 'react-router-dom'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-0 z-10 w-[260px] bg-sidebar px-4">
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

      <nav className="mt-8 flex w-full flex-col">
        <Collapsible className="w-full space-y-2">
          <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md bg-white/10 px-3 py-4 duration-150 data-[state=open]:bg-white/10">
            <div className="flex items-center gap-4">
              <HotelChainIcon />

              <span className="text-white">Disney Hotéis</span>
            </div>

            <CaretDown className="text-white duration-150 group-data-[state=open]:rotate-180" />
          </CollapsibleTrigger>

          <CollapsibleContent>
            <NavItem isActive to="details">
              Detalhes
            </NavItem>

            <NavItem to="/uh">UHs</NavItem>

            <NavItem to="/policies">Políticas</NavItem>

            <NavItem to="/taxes">Tarifas</NavItem>

            <NavItem to="/invetary">Inventário</NavItem>
          </CollapsibleContent>
        </Collapsible>
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
  return (
    <Link
      data-disabled={isDisabled}
      data-active={isActive}
      className="flex items-start rounded-md bg-transparent py-2 pl-12 pr-4 text-white duration-150 data-[active=true]:cursor-auto data-[disabled=true]:cursor-auto data-[active=true]:bg-primary data-[disabled=true]:opacity-50 data-[disabled=false]:data-[active=false]:hover:bg-primary"
      {...props}
    />
  )
}
