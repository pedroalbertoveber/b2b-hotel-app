import { B2BPattern } from '@/components'
import HotelCard from './components/HotelCard'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import PageHeader from '../Components/PageHeader'
import Hotelinfo from '../Components/Hotelinfo'

export function HotelPicker() {
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
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {hotels &&
            hotels.length > 0 &&
            hotels.map((hotel: any, index: number) => {
              return <HotelCard hotel={hotel} key={index} />
            })}
        </div>
      </B2BPattern.Containers.Container>
    </>
  )
}
