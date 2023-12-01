import { B2BPattern } from '@/components'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import PageHeader from '../Components/PageHeader'
import Hotelinfo from '../Components/Hotelinfo'

export function HotelChainInfo() {
  const {
    UsersHome: {
      hook: { hotels },
    },
  } = useUsersHomeEntityContext()
  return (
    <>
      {/* Page header */}
      <PageHeader />
      <Hotelinfo />

      <B2BPattern.Containers.Container className="overflow-visible md:mt-8">
        <></>
      </B2BPattern.Containers.Container>
    </>
  )
}
