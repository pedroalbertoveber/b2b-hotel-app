// Components
import { Divisor } from '@/components/Atoms/Divisor'
import { Tooltip } from '@/components/Utils/Tooltip'
import * as Tabs from '@/components/Interactive/Tabs'

// Icons
import {
  PiStarFill,
  PiLink,
  PiTwitterLogo,
  PiFacebookLogo,
  PiInstagramLogo,
} from 'react-icons/pi'

import { Pencil } from '@/common/icons'
import { B2BPattern } from '@/components'
import GeneralInformation from './GeneralInformation'
import Contact from './Contact'

// Sections

export function HotelDetails() {
  return (
    <>
      {/* Page header */}
      <div className="relative h-[226px] w-full">
        <div className="absolute inset-0 bg-primary/80"></div>
        <figure className="absolute inset-0 bg-[url('/test/hotel-room-image-teste.jpg')] bg-center opacity-50" />
      </div>

      <div className="mx-auto w-full border-b border-divider/20 bg-white pb-8">
        <div className="relative flex w-full max-w-[1264px] flex-col items-center justify-between px-12 py-4 md:flex-row">
          <div className="flex flex-col items-start gap-2 md:flex-row md:gap-6 md:pl-12">
            <img
              src="/test/hotel-outside-teste.jpg"
              alt=""
              className="-mt-[5.5rem] h-[147px] w-[147px] rounded-full border-4 border-white"
            />

            <div className="flex flex-col">
              <span className="main-title">Hotel do Mickey</span>
              <div className="flex items-center justify-start gap-2">
                <PiStarFill weight="fill" className="text-warning" size={20} />
                <PiStarFill weight="fill" className="text-warning" size={20} />
                <PiStarFill weight="fill" className="text-warning" size={20} />
                <PiStarFill weight="fill" className="text-warning" size={20} />
                <PiStarFill weight="fill" className="text-warning" size={20} />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-4 md:mt-0">
            <Tooltip description="Link">
              <PiLink size={24} className="text-primary" />
            </Tooltip>

            <Tooltip description="Facebook">
              <PiFacebookLogo size={24} className="text-primary" />
            </Tooltip>

            <Tooltip description="Instagram">
              <PiInstagramLogo size={24} className="text-primary" />
            </Tooltip>

            <Tooltip description="Twitter">
              <PiTwitterLogo size={24} className="text-primary" />
            </Tooltip>

            <Divisor direction="y" className="hidden h-4 md:block" />

            <Tooltip description="Editar">
              <Pencil />
            </Tooltip>
          </div>
        </div>
      </div>

      <B2BPattern.Containers.Container className="overflow-visible md:my-0 md:mb-12">
        <Tabs.Root
          orientation="horizontal"
          defaultValue="general-info"
          className="mx-auto flex w-full flex-col"
        >
          <Tabs.List className="mx-auto -mt-5 flex w-1/2">
            <Tabs.Trigger value="general-info">INFORMAÇÕES GERAIS</Tabs.Trigger>
            <Tabs.Trigger value="contact">CONTATO</Tabs.Trigger>
          </Tabs.List>

          <GeneralInformation />
          <Contact />
        </Tabs.Root>
      </B2BPattern.Containers.Container>
    </>
  )
}
