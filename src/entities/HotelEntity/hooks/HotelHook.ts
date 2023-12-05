import { CACHE_PATH } from '@/config/cache'
import { getCache } from '@/services/cache'
import { useState } from 'react'

export default function HotelHook() {
  const [currentHotel, setCurrentHotel] = useState<any>(
    getCache(CACHE_PATH.HOTELS.CURRENT_HOTEL).data || null,
  )

  return { currentHotel, setCurrentHotel }
}
