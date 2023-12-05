import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useHotelEntityContext } from '@/context/HotelEntityContext'
import { pensionOptions } from '@/data/pension'
import { useState } from 'react'

export default function UsePensionHook({ policy }: { policy: any }) {
  const { HotelChain } = useHotelChainEntityContext()
  const { Hotel } = useHotelEntityContext()

  const findPensionByValue = () => {
    const result = pensionOptions.find((e) => {
      return e.value === policy?.mealPlan?.data
    })
    return result
  }

  const [pension, setPension] = useState<any>(findPensionByValue() || '')
  const [edit, setEdit] = useState(false)

  const submit = async () => {
    const rules = {
      mealPlan: {
        data: pension.value,
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
    //         mealPlan: payload.rules.mealPlan,
    //       },
    //     }
    //   }
    //   return e
    // })

    // hotelChain.hook.setPolicy(mergedData)
    // setCache(hotelChain.cachePathPolicies, mergedData)
  }

  return {
    pension,
    setPension,
    edit,
    setEdit,
    submit,
  }
}
