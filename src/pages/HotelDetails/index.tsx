// Components
import { Divisor } from '@/components/Atoms/Divisor'
import { Tooltip } from '@/components/Utils/Tooltip'
import * as Menubar from '@/components/Interactive/Tabs'
import { Whitebox } from '@/components/PageBlocks/Whitebox'

// Icons
import {
  PiStarFill,
  PiLink,
  PiTwitterLogo,
  PiFacebookLogo,
  PiInstagramLogo,
} from 'react-icons/pi'

import { Pencil } from '@/common/icons'

// Sections
// import { Legal } from './GeneralInformation/Legal/Legal'
// import General from './GeneralInformation/General/General'
// import { Taxes } from './GeneralInformation/Taxes'
// import { Comodities } from './GeneralInformation/Comodities'

export function HotelDetails() {
  return (
    <>
      {/* Page header */}
      <div className="relative h-[226px] w-full">
        <div className="absolute inset-0 bg-primary/80"></div>
        <figure className="absolute inset-0 bg-[url('/test/hotel-room-image-teste.jpg')] bg-center opacity-50" />
      </div>

      <div className="flex w-full items-center justify-center border-b border-divider/20 bg-white pb-8">
        <div className="relative flex w-full max-w-[968px] items-center justify-between py-4">
          <div className="flex items-start gap-6 pl-12">
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
          <div className="flex items-center gap-4">
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

            <Divisor direction="y" className="h-4" />

            <Tooltip description="Editar">
              <Pencil />
            </Tooltip>
          </div>
        </div>
      </div>

      <Menubar.Root
        orientation="horizontal"
        defaultValue="general-info"
        className="mx-auto flex w-full max-w-[968px] flex-col"
      >
        <Menubar.List className="peer -mt-6 flex gap-2 duration-150 hover:-mt-8">
          <Menubar.Trigger value="general-info">
            INFORMAÇÕES GERAIS
          </Menubar.Trigger>

          <Menubar.Trigger value="contact">CONTATO</Menubar.Trigger>
          <Menubar.Trigger value="gallery">GALERIA</Menubar.Trigger>
          <Menubar.Trigger value="integrations">INTEGRAÇÕES</Menubar.Trigger>
        </Menubar.List>

        <Menubar.Content
          value="general-info"
          className="mt-6 grid w-full grid-cols-2 gap-2 duration-150 peer-hover:mt-8"
        >
          {/* <General /> */}

          {/* <Legal />

          <Comodities />

          <Taxes /> */}

          <Whitebox className="col-span-2"></Whitebox>
        </Menubar.Content>
      </Menubar.Root>
    </>
  )
}
