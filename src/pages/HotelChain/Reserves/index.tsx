import { B2BPattern } from '@/components'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import * as Tabs from '@/components/Interactive/Tabs'

export function HotelChainReserves() {
  const {
    UsersHome: {
      hook: { hotels },
    },
  } = useUsersHomeEntityContext()
  return (
    <B2BPattern.Containers.Container className="overflow-visible md:mt-8">
      <Tabs.Root
        orientation="horizontal"
        defaultValue="default"
        className="mx-auto flex w-full flex-col"
      >
        <Tabs.List className="flex w-1/2">
          <Tabs.Trigger value="default">Filtros Padrão</Tabs.Trigger>
          <Tabs.Trigger value="quick">Filtros Rápido</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="default">
          <B2BPattern.Containers.Whitebox className="w-full">
            <></>
          </B2BPattern.Containers.Whitebox>
        </Tabs.Content>
        <Tabs.Content value="quick">
          <B2BPattern.Containers.Whitebox className="w-full">
            <></>
          </B2BPattern.Containers.Whitebox>
        </Tabs.Content>
      </Tabs.Root>
    </B2BPattern.Containers.Container>
  )
}
