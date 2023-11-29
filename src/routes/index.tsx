import { HotelDetals } from '@/pages/hotel-details'
import { Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HotelDetals />} />
    </Routes>
  )
}
