import * as Tabs from '@/components/Interactive/Tabs'
import { Tooltip } from '@/components/Utils/Tooltip'

// Icons
import {
  Star,
  Link,
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
} from '@phosphor-icons/react'
import { Pencil } from '@/common/icons'
import { B2BPattern } from '@/components'
import General from './GeneralInformation/General/General'

export default function HotelDetails() {
  return (
    <>
      {/* Page header */}
      <div className="relative h-[226px] w-full">
        <div className="absolute inset-0 bg-primary/80"></div>
        <figure className="absolute inset-0 bg-[url('/test/hotel-room-image-teste.jpg')] bg-center opacity-50" />
      </div>

      <div className="w-full border-b border-divider/20 bg-white pb-4">
        <div className="relative mx-auto flex w-full max-w-[1480px] flex-col items-center justify-between py-4 md:flex-row md:px-20">
          <div className="mb-6 flex flex-col items-start gap-2 md:mb-0 md:flex-row md:gap-6">
            <img
              src="/test/hotel-outside-teste.jpg"
              alt=""
              className="-mt-[5.5rem] h-[147px] w-[147px] rounded-full border-4 border-white"
            />

            <div className="flex flex-col gap-2 md:gap-0">
              <span className="main-title">Hotel do Mickey</span>
              <div className="flex items-center justify-start gap-2">
                <Star weight="fill" className="text-warning" size={20} />
                <Star weight="fill" className="text-warning" size={20} />
                <Star weight="fill" className="text-warning" size={20} />
                <Star weight="fill" className="text-warning" size={20} />
                <Star weight="fill" className="text-warning" size={20} />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Tooltip description="Link">
              <Link size={24} className="text-primary" />
            </Tooltip>

            <Tooltip description="Facebook">
              <FacebookLogo size={24} className="text-primary" />
            </Tooltip>

            <Tooltip description="Instagram">
              <InstagramLogo size={24} className="text-primary" />
            </Tooltip>

            <Tooltip description="Twitter">
              <TwitterLogo size={24} className="text-primary" />
            </Tooltip>

            <B2BPattern.Containers.Divisor direction="y" className="h-4" />

            <Tooltip description="Editar">
              <Pencil />
            </Tooltip>
          </div>
        </div>
      </div>

      <B2BPattern.Containers.Container className="overflow-visible">
        <Tabs.Root
          orientation="horizontal"
          defaultValue="general-info"
          className="mx-auto flex w-full flex-col"
        >
          <Tabs.List className="peer flex gap-2 duration-150 md:-mt-6 md:hover:-mt-8">
            <Tabs.Trigger value="general-info">INFORMAÇÕES GERAIS</Tabs.Trigger>

            <Tabs.Trigger value="contact">CONTATO</Tabs.Trigger>
            <Tabs.Trigger value="gallery">GALERIA</Tabs.Trigger>
            <Tabs.Trigger value="integrations">INTEGRAÇÕES</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content
            value="general-info"
            className="mt-6 grid w-full grid-cols-1 gap-2 duration-150 peer-hover:mt-8 md:grid-cols-2"
          >
            <General data={[]} />
            <General data={[]} />
            <General data={[]} />
            <General data={[]} />
          </Tabs.Content>
        </Tabs.Root>
      </B2BPattern.Containers.Container>
    </>
  )
}
