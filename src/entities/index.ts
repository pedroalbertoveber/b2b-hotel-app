import AvailEntity from './AvailEntity/AvailEntity'
import HotelChainEntity from './HotelChainEntity/HotelChainEntity'
import HotelEntity from './HotelEntity/HotelEntity'
import UsersHomeEntity from './UsersHomeEntity/UsersHomeEntity'

export default function Entities() {
  const Avail = new AvailEntity()
  const HotelChain = new HotelChainEntity()
  const Hotel = new HotelEntity()
  const UsersHome = new UsersHomeEntity()

  return {
    Avail,
    HotelChain,
    Hotel,
    UsersHome,
  }
}
