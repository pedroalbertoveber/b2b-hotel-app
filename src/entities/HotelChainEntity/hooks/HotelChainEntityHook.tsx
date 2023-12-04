import { CACHE_PATH } from '@/config/cache'
import { get } from '@/services/cache'
import React from 'react'

export default function HotelChainEntityHook() {
  const [data, setData] = React.useState(null)
  const [policies, setPolicies] = React.useState(
    get(CACHE_PATH.HOTELS_CHAIN.POLICY).data || [],
  )
  const [currentPolicy, setCurrentPolicy] = React.useState(
    get(CACHE_PATH.HOTELS_CHAIN.CURRENT_POLICY) || {},
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
