import { HotelDetails } from '@/pages/HotelChain/HotelDetails'
import { Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HotelDetails />} />
    </Routes>
  )
}
