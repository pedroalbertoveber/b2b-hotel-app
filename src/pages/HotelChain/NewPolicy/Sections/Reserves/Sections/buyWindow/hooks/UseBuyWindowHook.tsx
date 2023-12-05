import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useHotelEntityContext } from '@/context/HotelEntityContext'
import { useState } from 'react'

export default function UseBuyWindowHook({ policy }: { policy: any }) {
  const { HotelChain } = useHotelChainEntityContext()
  const { Hotel } = useHotelEntityContext()

  const days = [
    {
      title: 'Segunda',
      key: 'MONDAY',
    },
    {
      title: 'Terça',
      key: 'TUESDAY',
    },
    {
      title: 'Quarta',
      key: 'WEDNESDAY',
    },
    {
      title: 'Quinta',
      key: 'THURSDAY',
    },
    {
      title: 'Sexta',
      key: 'FRIDAY',
    },
    {
      title: 'Sábado',
      key: 'SATURDAY',
    },
    {
      title: 'Domingo',
      key: 'SUNDAY',
    },
  ]
  const [min, setMin] = useState(
    days.map(() => {
      return 1
    }),
  )
  const [max, setMax] = useState(
    days.map(() => {
      return 60
    }),
  )
  const [edit, setEdit] = useState(false)

  const submit = async () => {
    const getMin = min.map((e, i) => {
      return {
        day: days[i].key,
        value: e,
      }
    })
    const getMax = max.map((e, i) => {
      return {
        day: days[i].key,
        value: e,
      }
    })
    const rules: any = {
      minMaxLos: {
        data: {
          minLos: getMin,
          maxLos: getMax,
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
    //   payload
    // );

    // const mergedData = hotelChain.hook.policy.map((e: any) => {
    //   if (e.alphaId === policy.alphaId) {
    //     return {
    //       ...e,
    //       rules: {
    //         ...e.rules,
    //         healthProtocol: payload.rules.healthProtocol,
    //       },
    //     };
    //   }
    //   return e;
    // });

    // hotelChain.hook.setPolicy(mergedData);
    // set(hotelChain.cachePathPolicies, mergedData);
  }

  return {
    days,
    min,
    max,
    edit,
    setEdit,
    setMin,
    setMax,
    submit,
  }
}
