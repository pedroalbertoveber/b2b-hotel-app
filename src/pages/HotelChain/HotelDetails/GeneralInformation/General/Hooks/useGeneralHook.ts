import { createCnpjMask } from '@/utils/inputMasks'
import React, { useState } from 'react'
import { Form } from '../Schema/schema'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import { HotelChain } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'
import { CACHE_PATH } from '@/config/cache'

export default function useGeneralHook({ setValue, trigger, setOpen }) {
  const { UsersHome } = useUsersHomeEntityContext()
  const {
    hook: { hotelsChain, setHotelsChain },
  } = UsersHome

  const { HotelChain } = useHotelChainEntityContext()
  function handleChangeHotelExempted(value: boolean) {
    if (value) {
      setValue('exemptedStateCompanyRegNumber', true)
      setValue('stateCompanyRegNumber', '')
    } else {
      setValue('exemptedStateCompanyRegNumber', false)
    }
  }

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

  async function handleUpdateGeneralInfo(formData: Form) {
    try {
      const body = {
        alphaId: hotelsChain.alphaId,
        ...formData,
      }
      setOpen(false)
      await HotelChain.putHttp({
        method: hotelsChain.alphaId + '/' + HotelChain.putMethods.legalInfo,
        body,
      })

      const mergedData: HotelChain = {
        ...hotelsChain,
        corporateName: body.corporateName,
        taxpayerId: body.taxPayerRegistryCode,
        stateCompanyRegNumber: body.stateCompanyRegNumber || '',
        exemptedStateCompanyRegNumber: body.exemptedStateCompanyRegNumber,
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
    handleChangeHotelExempted,
    handleChangeTaxPayerRegistryCode,
    handleDisplayConfirmationAlert,
    handleDisplaySuccessFeedback,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateGeneralInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  }
}
