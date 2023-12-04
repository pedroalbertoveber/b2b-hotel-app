import { B2BPattern } from '@/components'
import PageHeader from '../Components/PageHeader'
import Hotelinfo from '../Components/Hotelinfo'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import * as Tabs from '@/components/Interactive/Tabs'
import PolicyDisplay from './Components/PolicyDisplay'

export function HotelChainNewPolicy() {
  const {
    HotelChain: {
      hook: { currentPolicy },
    },
  } = useHotelChainEntityContext()

  console.log('current policy - ', currentPolicy)
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
          defaultValue="general-info"
          className="mx-auto flex w-full flex-col"
        >
          <Tabs.List className="mx-auto mt-12 flex w-full">
            <Tabs.Trigger value="general-info">Financeiro</Tabs.Trigger>
            <Tabs.Trigger value="contact">Condições</Tabs.Trigger>
            <Tabs.Trigger value="contact">Reservas</Tabs.Trigger>
            <Tabs.Trigger value="contact">Tarifas</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </B2BPattern.Containers.Container>
    </>
  )
}
