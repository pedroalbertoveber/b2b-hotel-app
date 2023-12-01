import { CACHE_PATH } from '@/config/cache'
import { get } from '@/services/cache'
import React from 'react'

export default function UsersHomeEntityHook() {
  const [data, setData] = React.useState(
    get(CACHE_PATH.USERSHOME.DEFAULT).data || null,
  )
  const [hotels, setHotels] = React.useState(
    get(CACHE_PATH.USERSHOME.HOTELS).data || [],
  )
  const [hotelsChain, setHotelsChain] = React.useState(
    get(CACHE_PATH.USERSHOME.HOTELS_CHAIN).data || [],
  )

  return { data, setData, hotels, setHotels, hotelsChain, setHotelsChain }
}
