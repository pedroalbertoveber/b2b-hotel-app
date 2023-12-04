import { CACHE_PATH } from '@/config/cache'
import { HotelChain } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'
import { getCache } from '@/services/cache'
import React from 'react'

export default function UsersHomeEntityHook() {
  const [data, setData] = React.useState(
    getCache(CACHE_PATH.USERSHOME.DEFAULT).data || null,
  )
  const [hotels, setHotels] = React.useState(
    getCache(CACHE_PATH.USERSHOME.HOTELS).data || [],
  )
  const [hotelsChain, setHotelsChain] = React.useState<HotelChain>(
    getCache(CACHE_PATH.USERSHOME.HOTELS_CHAIN).data || [],
  )

  return { data, setData, hotels, setHotels, hotelsChain, setHotelsChain }
}
