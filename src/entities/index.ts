import AvailEntity from './AvailEntity/AvailEntity'
import HotelChainEntity from './HotelChainEntity/HotelChainEntity'
import HotelEntity from './HotelEntity/HotelEntity'

export default function Entities() {
  const Avail = new AvailEntity()
  const HotelChain = new HotelChainEntity()
  const Hotel = new HotelEntity()

  return {
    Avail,
    HotelChain,
    Hotel,
  }
}
