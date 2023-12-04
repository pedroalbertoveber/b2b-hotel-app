import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import { Form } from '../Schema/schema'
import { useHotelChainEntityContext } from '@/context/HotelChainEntityContext'
import { useState } from 'react'

export default function useAditionalContactHook({ setOpen }) {
  const { UsersHome } = useUsersHomeEntityContext()
  const {
    hook: { hotelsChain, setHotelsChain },
  } = UsersHome

  const { HotelChain } = useHotelChainEntityContext()
  async function handleDisplayConfirmationAlert() {
    setShouldDisplayConfirmationAlert(true)
  }

  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

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
      const payload = {
        alphaId: hotelsChain.alphaId,
        ...formData,
      }
      setOpen(false)

      const res = await HotelChain.putHttp({
        method: hotelsChain.alphaId + '/' + HotelChain.putMethods.contacts,
        body: payload,
      })

      let mergedData: any = {}

      Object.keys(hotelsChain).forEach((e) => {
        if (formData[e]) {
          mergedData = {
            ...mergedData,
            [e]: formData[e],
          }
        } else {
          mergedData = {
            ...mergedData,
            [e]: hotelsChain[e],
          }
        }
      })

      console.log('merged data - ', mergedData)

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
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateGeneralInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  }
}
