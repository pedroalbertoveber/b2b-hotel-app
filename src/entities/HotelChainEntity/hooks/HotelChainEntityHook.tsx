import { CACHE_PATH } from '@/config/cache'
import { getCache } from '@/services/cache'
import React from 'react'
import { HotelChain } from '../@types/HotelChainEntityTypes'

export default function HotelChainEntityHook() {
  const [data, setData] = React.useState(null)
  const [policies, setPolicies] = React.useState(
    getCache(CACHE_PATH.HOTELS_CHAIN.POLICY).data || [],
  )
  const [currentPolicy, setCurrentPolicy] = React.useState<HotelChain>(
    getCache(CACHE_PATH.HOTELS_CHAIN.CURRENT_POLICY) || {},
  )

  return {
    data,
    setData,
    policies,
    setPolicies,
    currentPolicy,
    setCurrentPolicy,
  }
}
