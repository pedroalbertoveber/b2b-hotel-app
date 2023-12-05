import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useHotelEntityContext } from '@/context/HotelEntityContext'
import { useState } from 'react'

export default function UseHoursHook({ policy }: { policy: any }) {
  const { HotelChain } = useHotelChainEntityContext()
  const { Hotel } = useHotelEntityContext()

  const [checkIn, setCheckIn] = useState(policy?.stay?.data?.checkin || '')
  const [checkOut, setCheckOut] = useState(policy?.stay?.data?.checkout || '')
  const [edit, setEdit] = useState(false)

  const handleSubmit = async () => {
    const rules = {
      stay: {
        data: {
          checkin: checkIn,
          checkout: checkOut,
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
    //         stay: payload.rules.stay,
    //       },
    //     }
    //   }
    //   return e
    // })

    // hotelChain.hook.setPolicy(mergedData)
    // setCache(hotelChain.cachePathPolicies, mergedData)
  }

  return {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    edit,
    setEdit,
    handleSubmit,
  }
}
