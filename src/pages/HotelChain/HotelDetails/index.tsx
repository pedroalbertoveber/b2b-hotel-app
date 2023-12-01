import * as Tabs from '@/components/Interactive/Tabs'

import { B2BPattern } from '@/components'
import GeneralInformation from './GeneralInformation'
import Contact from './Contact'
import Hotelinfo from '../Components/Hotelinfo'
import PageHeader from '../Components/PageHeader'

// Sections

export function HotelDetails() {
  return (
    <>
      {/* Page header */}
      <PageHeader />
      <Hotelinfo />

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
