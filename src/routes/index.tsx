import { HotelChainInfo } from '@/pages/HotelChain/Chain'
import { HotelChainClients } from '@/pages/HotelChain/Clients'
import { HotelDetails } from '@/pages/HotelChain/HotelDetails'
import { HotelPicker } from '@/pages/HotelChain/HotelPicker'
import { HotelChainNewPolicy } from '@/pages/HotelChain/NewPolicy'
import { HotelChainPolicy } from '@/pages/HotelChain/Policy'
import { HotelChainReserves } from '@/pages/HotelChain/Reserves'
import { Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HotelDetails />} />
      <Route path="/hotelChain/hotels" element={<HotelPicker />} />
      <Route path="/hotelChain/policy" element={<HotelChainPolicy />} />
      <Route path="/hotelChain/newPolicy" element={<HotelChainNewPolicy />} />
      <Route path="/hotelChain/reserves" element={<HotelChainReserves />} />
      <Route path="/hotelChain/clients" element={<HotelChainClients />} />
      <Route path="/hotelChain/chain" element={<HotelChainInfo />} />
    </Routes>
  )
}
