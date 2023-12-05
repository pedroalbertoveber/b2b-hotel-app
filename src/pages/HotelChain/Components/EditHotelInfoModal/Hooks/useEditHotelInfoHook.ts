import { createCnpjMask } from '@/utils/inputMasks'
import React, { useState } from 'react'
import { Form } from '../Schema/schema'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import { CACHE_PATH } from '@/config/cache'
import { useHotelEntityContext } from '@/context/HotelEntityContext'

export default function useEditHotelInfoHook({ setValue, trigger, setOpen }) {
  const { UsersHome } = useUsersHomeEntityContext()
  const {
    hook: { hotelsChain, setHotelsChain },
  } = UsersHome

  const { Hotel } = useHotelEntityContext()
  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

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

  async function handleUpdateGeneralInfo(data: Form) {
    try {
      if (typeof data.logo === 'object') {
        Hotel.changeLogo(hotelsChain.alphaId, data.logo[0])
      }
      const object = {
        socialName: data.name,
        socialNetworks: [
          {
            type: 'site',
            url: data.site,
          },
          {
            type: 'facebook',
            url: data.facebook,
          },
          {
            type: 'instagram',
            url: data.instagram,
          },
          {
            type: 'twitter',
            url: data.twitter,
          },
        ],
      }
      await Hotel.changeSocialInfo(hotelsChain.alphaId, object)
      //   setOpen(false)

      //   setHotelsChain(mergedData)
      //   UsersHome.setLocalStorage({
      //     data: mergedData,
      //     key: CACHE_PATH.USERSHOME.HOTELS_CHAIN,
      //   })
      handleDisplaySuccessFeedback()
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    handleDisplayConfirmationAlert,
    handleDisplaySuccessFeedback,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateGeneralInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  }
}
