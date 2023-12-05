// Components
import { Divisor } from '@/components/Atoms/Divisor'
import { Tooltip } from '@/components/Utils/Tooltip'

// Icons
import {
  PiStarFill,
  PiLink,
  PiTwitterLogo,
  PiFacebookLogo,
  PiInstagramLogo,
} from 'react-icons/pi'

import { Pencil } from '@/common/icons'
import SectionModal from './EditHotelInfoModal/Modal/SectionModal'
import { useState } from 'react'

export default function Hotelinfo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="mx-auto w-full border-b border-divider/20 bg-white pb-8">
        <div className="relative flex w-full max-w-[1264px] flex-col items-center justify-between px-12 py-4 lg:flex-row">
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:gap-6 lg:pl-12">
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
          <div className="mt-6 flex items-center gap-4 lg:mt-0">
            <Tooltip description="Link">
              <button
                type="button"
                onClick={() => {
                  console.log('click')
                }}
              >
                <PiLink size={24} className="text-primary" />
              </button>
            </Tooltip>

            <Tooltip description="Facebook">
              <button
                type="button"
                onClick={() => {
                  console.log('click')
                }}
              >
                <PiFacebookLogo size={24} className="text-primary" />
              </button>
            </Tooltip>

            <Tooltip description="Instagram">
              <button
                type="button"
                onClick={() => {
                  console.log('click')
                }}
              >
                <PiInstagramLogo size={24} className="text-primary" />
              </button>
            </Tooltip>

            <Tooltip description="Twitter">
              <button
                type="button"
                onClick={() => {
                  console.log('click')
                }}
              >
                <PiTwitterLogo size={24} className="text-primary" />
              </button>
            </Tooltip>

            <Divisor direction="y" className="hidden h-4 lg:block" />

            <Tooltip description="Editar">
              <button
                type="button"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <Pencil />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <SectionModal open={open} setOpen={setOpen} />
    </>
  )
}
