import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useHotelEntityContext } from '@/context/HotelEntityContext'
import { useState } from 'react'

export default function UsePetsHook({ policy }: { policy: any }) {
  const { HotelChain } = useHotelChainEntityContext()
  const { Hotel } = useHotelEntityContext()

  const getLanguageRules = (key: 'PT_BR' | 'EN_US' | 'ES_ES') => {
    return policy?.pet?.data?.rules ? policy?.pet?.data?.rules[key] : ''
  }

  const [allowPets, setAllowPets] = useState(
    policy?.pet?.data?.allowPet || false,
  )
  const [edit, setEdit] = useState(false)
  const [languageRules, setLanguageRules] = useState<string[]>([
    getLanguageRules('PT_BR'),
    getLanguageRules('EN_US'),
    getLanguageRules('ES_ES'),
  ])

  const submit = async () => {
    const rules = {
      pet: {
        data: {
          allowPet: allowPets,
          rules: {
            PT_BR: languageRules[0],
            EN_US: languageRules[1],
            ES_ES: languageRules[2],
          },
        },
        inherited: false,
      },
    }
    // const payload = {
    //   hotelRatePolicyAlphaId: hotel.hook.data[0].alphaId,
    //   ratePolicyEntityAlphaId: policy.alphaId,
    //   rules,
    // }

    // await hotelChain.putHttp(
    //   'rate-policies/' + policy.alphaId + '/' + hotelChain.putMethods.rules,
    //   payload,
    // )

    // const mergedData = hotelChain.hook.policy.map((e: any) => {
    //   if (e.alphaId === policy.alphaId) {
    //     return {
    //       ...e,
    //       rules: {
    //         ...e.rules,
    //         pet: payload.rules.pet,
    //       },
    //     }
    //   }
    //   return e
    // })

    // hotelChain.hook.setPolicy(mergedData)
    // setCache(hotelChain.cachePathPolicies, mergedData)
  }

  return {
    allowPets,
    setAllowPets,
    edit,
    setEdit,
    languageRules,
    setLanguageRules,
    submit,
  }
}
