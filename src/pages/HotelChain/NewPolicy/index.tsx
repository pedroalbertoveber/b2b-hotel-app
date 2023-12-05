import { B2BPattern } from '@/components'
import PageHeader from '../Components/PageHeader'
import Hotelinfo from '../Components/Hotelinfo'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import * as Tabs from '@/components/Interactive/Tabs'
import PolicyDisplay from './Components/PolicyDisplay'
import Financial from './Sections/Financial/Financial'
import Conditions from './Sections/Conditions/Conditions'
import Reserves from './Sections/Reserves/Reserves'
import Tariffs from './Sections/Tariffs/Tariffs'

export function HotelChainNewPolicy() {
  const {
    HotelChain: {
      hook: { currentPolicy },
    },
  } = useHotelChainEntityContext()

  return (
    <>
      {/* Page header */}
      <PageHeader />
      <Hotelinfo />

      <B2BPattern.Containers.Container className="overflow-visible md:mt-8">
        <B2BPattern.Texts.Title className="mb-8" title={currentPolicy.name} />
        <PolicyDisplay currentPolicy={currentPolicy} />

        <Tabs.Root
          orientation="horizontal"
          defaultValue="financial"
          className="mx-auto flex w-full flex-col"
        >
          <Tabs.List className="mx-auto mt-12 flex w-full">
            <Tabs.Trigger value="financial">Financeiro</Tabs.Trigger>
            <Tabs.Trigger value="conditions">Condições</Tabs.Trigger>
            <Tabs.Trigger value="reserves">Reservas</Tabs.Trigger>
            <Tabs.Trigger value="taxes">Tarifas</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="financial" className="mt-6 w-full">
            <Financial policy={currentPolicy} />
          </Tabs.Content>

          <Tabs.Content value="conditions" className="mt-6 w-full">
            <Conditions policy={currentPolicy} />
          </Tabs.Content>

          <Tabs.Content value="reserves" className="mt-6 w-full">
            <Reserves policy={currentPolicy} />
          </Tabs.Content>

          <Tabs.Content value="taxes" className="mt-6 w-full">
            <Tariffs policy={currentPolicy} />
          </Tabs.Content>
        </Tabs.Root>
      </B2BPattern.Containers.Container>
    </>
  )
}
