import { DashContext } from '@/app/(dashboard)/(context)/DashContext'
import HotelClass from '@/classes/Hotel/HotelClass'
import HotelChainClass from '@/classes/HotelChain/HotelChainClass'
import { currencyCodes } from '@/globalData/currency'
import { setCache } from '@/services/cache'
import { set } from '@/services/cache/cache'
import { useContext, useState } from 'react'

export default function UseCurrencyHook({ policy }: { policy: any }) {
  const {
    hotelChain,
    hotel,
  }: {
    hotelChain: HotelChainClass
    hotel: HotelClass
  } = useContext(DashContext)

  const getDefaultCurrency = () => {
    return policy?.currency?.data
  }

  const getBRL = () => {
    return currencyCodes.find((e: any) => {
      return e.nome === 'Real'
    })
  }

  const findCurrencyByCode = (currencyCode: string) => {
    return currencyCodes.find((e) => {
      return e.value === currencyCode
    })
  }

  const [currency, setCurrency] = useState(
    findCurrencyByCode(getDefaultCurrency().currencyCode) || getBRL(),
  )
  const [conversion, setConversion] = useState(
    getDefaultCurrency().allowConversion || false,
  )
  const [edit, setEdit] = useState(false)

  const handleSubmit = async () => {
    const rules = {
      currency: {
        data: {
          currencyCode: currency?.value,
          allowConversion: conversion,
        },
        inherited: false,
      },
    }
    const payload = {
      hotelRatePolicyAlphaId: hotel.hook.data[0].alphaId,
      ratePolicyEntityAlphaId: policy.alphaId,
      rules,
    }

    await hotelChain.putHttp(
      'rate-policies/' + policy.alphaId + '/' + hotelChain.putMethods.rules,
      payload,
    )

    const mergedData = hotelChain.hook.policy.map((e: any) => {
      if (e.alphaId === policy.alphaId) {
        return {
          ...e,
          rules: {
            ...e.rules,
            currency: payload.rules.currency,
          },
        }
      }
      return e
    })

    hotelChain.hook.setPolicy(mergedData)
    setCache(hotelChain.cachePathPolicies, mergedData)
  }

  return {
    currency,
    setCurrency,
    conversion,
    setConversion,
    edit,
    setEdit,
    handleSubmit,
  }
}
