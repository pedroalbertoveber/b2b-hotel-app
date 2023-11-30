// Core
import type { ComponentProps } from 'react'

// Icons
import {
  User,
  Bell,
  MagnifyingGlass,
  List,
  Question,
} from '@phosphor-icons/react'

import LightLogo from '@/assets/images/light-logo.png'

export function Header() {
  return (
    <header className="menu-shadow fixed right-0 top-0 z-20 flex min-h-[64px] w-full justify-center bg-[#f8f8f8]">
      <div className="mx-6 flex w-full max-w-[1480px] items-center justify-between">
        {/* <Input type="text" placeholder="Pesquisar" /> */}

        <div className="flex gap-4">
          <List size={26} weight="fill" className="text-black" />
          <img src={LightLogo} alt="Avatar" />
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="cursor-pointer rounded-full bg-transparent text-white duration-150 hover:bg-white/10">
            <Question size={24} weight="fill" className="text-black" />
          </div>

          <div className="cursor-pointer rounded-full bg-transparent text-white duration-150 hover:bg-white/10">
            <Bell size={24} weight="fill" className="text-black" />
          </div>

          <div className="cursor-pointer rounded-full bg-transparent text-white duration-150 hover:bg-white/10">
            <User weight="fill" className="text-black" size={24} />
          </div>
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
