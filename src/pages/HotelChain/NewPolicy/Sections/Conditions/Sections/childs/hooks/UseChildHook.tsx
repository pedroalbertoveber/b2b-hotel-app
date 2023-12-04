'use client'

import { DashContext } from '@/app/(dashboard)/(context)/DashContext'
import HotelClass from '@/classes/Hotel/HotelClass'
import HotelChainClass from '@/classes/HotelChain/HotelChainClass'
import { setCache } from '@/services/cache'
import { set } from '@/services/cache/cache'
import { useContext, useState } from 'react'

export default function UseChildHook({ policy }: { policy: any }) {
  const {
    hotelChain,
    hotel,
  }: {
    hotelChain: HotelChainClass
    hotel: HotelClass
  } = useContext(DashContext)

  const getLanguageRules = (key: 'PT_BR' | 'EN_US' | 'ES_ES') => {
    return policy?.child?.data?.rules ? policy?.child?.data?.rules[key] : ''
  }

  const [allowChild, setAllowChild] = useState(
    policy?.child?.data?.allowChild || false,
  )
  const [courtesyChild, setCourtesyChild] = useState(
    policy?.child?.data?.courtesy?.child > 0 || false,
  )
  const [childUntilAge, setChildUntilAge] = useState(
    policy?.child?.data?.childMaxAge || 0,
  )
  const [howManyChilds, setHowManyChilds] = useState(
    policy?.child?.data?.courtesy?.quantity || 0,
  )
  const [childUntilAgeForCortesy, setChildUntilAgeForCortesy] = useState(
    policy?.child?.data?.courtesy?.childMaxAge || 0,
  )
  const [edit, setEdit] = useState(false)
  const [languageRules, setLanguageRules] = useState<string[]>([
    getLanguageRules('PT_BR'),
    getLanguageRules('EN_US'),
    getLanguageRules('ES_ES'),
  ])

  const submit = async () => {
    const rules = {
      child: {
        data: {
          allowChild,
          childMaxAge: childUntilAge,
          courtesy: {
            childMaxAge: childUntilAgeForCortesy,
            quantity: howManyChilds,
          },
          rules: {
            PT_BR: languageRules[0],
            EN_US: languageRules[1],
            ES_ES: languageRules[2],
          },
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
            child: payload.rules.child,
          },
        }
      }
      return e
    })

    hotelChain.hook.setPolicy(mergedData)
    setCache(hotelChain.cachePathPolicies, mergedData)
  }

  return {
    edit,
    setEdit,
    allowChild,
    setAllowChild,
    courtesyChild,
    setCourtesyChild,
    childUntilAge,
    setChildUntilAge,
    howManyChilds,
    setHowManyChilds,
    childUntilAgeForCortesy,
    setChildUntilAgeForCortesy,
    languageRules,
    setLanguageRules,
    submit,
  }
}
