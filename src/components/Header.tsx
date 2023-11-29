// Core
import type { ComponentProps } from 'react'

// Icons
import {
  DotsThreeOutlineVertical,
  User,
  Bell,
  MagnifyingGlass,
} from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="fixed left-[260px] right-0 top-0 z-20 flex justify-center bg-primary-900 py-4">
      <div className="mx-auto flex w-full max-w-[968px] items-center justify-end">
        <Input type="text" placeholder="Pesquisar" />

        <div className="cursor-pointer rounded-full bg-transparent p-2 duration-150 hover:bg-white/10">
          <Bell size={22} weight="fill" className="text-white" />
        </div>

        <div className="cursor-pointer rounded-full bg-transparent p-2 duration-150 hover:bg-white/10">
          <User size={22} weight="fill" className="text-white" />
        </div>

        <div className="cursor-pointer rounded-full bg-transparent p-2 duration-150 hover:bg-white/10">
          <DotsThreeOutlineVertical
            weight="fill"
            className="text-white"
            size={22}
          />
        </div>
      </div>
    </header>
  )
}

export function Input(props: ComponentProps<'input'>) {
  return (
    <label className="group mr-6 flex items-center justify-start gap-2 border-b border-white bg-transparent duration-150">
      <input
        {...props}
        className="w-auto bg-transparent py-2 text-base text-white duration-150 placeholder:text-white focus:outline-none "
      />

      <button type="button">
        <MagnifyingGlass size={22} className="text-white" />
      </button>
    </label>
  )
}
