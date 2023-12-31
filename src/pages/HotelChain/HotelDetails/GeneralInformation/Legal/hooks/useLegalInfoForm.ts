import { createCnpjMask } from '@/utils/inputMasks'
import React, { useState } from 'react'
import { Form } from '../Schema/schema'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import { CACHE_PATH } from '@/config/cache'

export default function useLegalInfoHook({ setValue, trigger, setOpen }) {
  const { UsersHome } = useUsersHomeEntityContext()
  const {
    hook: { hotelsChain, setHotelsChain },
  } = UsersHome

  const { HotelChain } = useHotelChainEntityContext()

  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

  function handleChangeTaxPayerRegistryCode(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const formattedValue = createCnpjMask(event.target.value)
    setValue('taxPayerRegistryCode', formattedValue)
  }

  async function handleDisplayConfirmationAlert() {
    const result = await trigger()

    if (result) {
      setShouldDisplayConfirmationAlert(true)
    }
  }

  function handleDisplaySuccessFeedback() {
    setShouldDisplaySuccessFeedback(true)
  }

  function handleGoBackToForm() {
    setShouldDisplayConfirmationAlert(false)
  }

  function handleCloseDialog() {
    setOpen(false)
    setTimeout(() => {
      setShouldDisplayConfirmationAlert(false)
      setShouldDisplaySuccessFeedback(false)
    }, 100)
  }

  async function handleUpdateLegalInfo(formData: Form) {
    try {
      const payload = {
        alphaId: hotelsChain.alphaId,
        responsible: { ...formData },
      }
      setOpen(false)
      await HotelChain.putHttp({
        method:
          hotelsChain.alphaId + '/' + HotelChain.putMethods.responsibleInfo,
        body: payload,
      })

      const mergedData = {
        ...hotelsChain,
        responsible: {
          fullName: payload.responsible.fullName,
          role: payload.responsible.role,
          taxPayerCode: payload.responsible.taxPayerCode,
        },
      }

      setHotelsChain(mergedData)
      UsersHome.setLocalStorage({
        data: mergedData,
        key: CACHE_PATH.USERSHOME.HOTELS_CHAIN,
      })
      handleDisplaySuccessFeedback()
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    handleChangeTaxPayerRegistryCode,
    handleDisplayConfirmationAlert,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateLegalInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  }
}
