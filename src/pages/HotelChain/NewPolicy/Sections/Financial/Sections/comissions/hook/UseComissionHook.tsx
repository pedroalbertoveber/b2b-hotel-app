import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { set, setCache } from '@/services/cache'
import { useState } from 'react'

export default function UseComissionHook({ policy }: { policy: any }) {
  const { HotelChain } = useHotelChainEntityContext()
  const findDefault = (key: string) => {
    if (Object.keys(policy.commission.data).includes(key)) {
      const result = {
        checked: true,
        value: policy.commission.data[key],
      }
      return result
    }
    return {
      checked: false,
      value: 0,
    }
  }

  const data = [
    {
      title: 'Tarifa comissionada',
      checked: policy ? Object.keys(policy.commission.data).length > 0 : false,
      child: [
        {
          title: 'Valor por diária',
          name: 'valueByDailyRate',
          checked: findDefault('valueByDailyRate').checked,
          value: findDefault('valueByDailyRate').value,
        },
        {
          title: 'Valor por reserva',
          name: 'valueByBooking',
          checked: findDefault('valueByBooking').checked,
          value: findDefault('valueByBooking').value,
        },
        {
          title: 'Percentual',
          name: 'valuePerc',
          checked: findDefault('valuePerc').checked,
          value: findDefault('valuePerc').value,
        },
      ],
    },
  ]

  const [edit, setEdit] = useState(false)
  const [parentChecked, setParentChecked] = useState<any>(data[0].checked)
  const [childChecked, setChildChecked] = useState<any>(
    data[0].child.map((e) => e.checked),
  )
  const [childValue, setChildValue] = useState<any>(
    data[0].child.find((e) => {
      return e.value > 0
    })?.value || 0,
  )

  const handleParentToggle = () => {
    setParentChecked(!parentChecked)
    const aux = data[0].child.map((e) => {
      e.checked = false
      return e.checked
    })
    setChildChecked(aux)
  }

  const handleChildToggle = (child: any) => {
    const aux = childChecked.map(() => {
      return false
    })
    const index = data[0].child.indexOf(child)
    aux[index] = !aux[index]
    setChildChecked(aux)
  }

  const handleSubmit = async () => {
    if (parentChecked) {
      const index = childChecked.indexOf(true)
      const rules = {
        // AO IMPORTAR ALTERAR AQUI
        commission: {
          data: {
            [data[0].child[index].name]: +childValue,
          },
          inherited: false,
        },
      }
      const payload = {
        hotelRatePolicyAlphaId: hotel.hook.data[0].alphaId,
        ratePolicyEntityAlphaId: policy.alphaId,
        rules,
      }

      await HotelChain.putHttp(
        'rate-policies/' + policy.alphaId + '/' + HotelChain.putMethods.rules,
        payload,
      )

      const mergedData = HotelChain.hook.policy.map((e: any) => {
        if (e.alphaId === policy.alphaId) {
          return {
            ...e,
            rules: {
              ...e.rules,
              commission: rules.commission,
              // AO IMPORTAR ALTERAR AQUI
            },
          }
        }
        return e
      })

      HotelChain.hook.setPolicy(mergedData)
      setCache(HotelChain.cachePathPolicies, mergedData)
    }
  }

  return {
    data,
    edit,
    setEdit,
    parentChecked,
    setParentChecked,
    childChecked,
    setChildChecked,
    childValue,
    setChildValue,
    handleParentToggle,
    handleChildToggle,
    HotelChain,
    hotel,
    handleSubmit,
  }
}
