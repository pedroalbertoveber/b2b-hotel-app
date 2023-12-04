// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

// Icons
import { LuCheck } from 'react-icons/lu'

// Form
import {
  useGeneralInfoForm,
  type UseGeneralInfoFormType,
} from '../hooks/useGeneralInfoForm'

import type { GeranalInfoFormType } from '../Schema/schema'

// Utils
import { createCnpjMask } from '@/utils/inputMasks'

// Mock
import { HOTEL_TYPES } from '@/common/mocks/hotel-types'

type SectionModalProps = {
  open: boolean
  data: UseGeneralInfoFormType
  setOpen: (open: boolean) => void
}

export default function SectionModal({
  open,
  setOpen,
  data,
}: SectionModalProps) {
  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

  const { watch, trigger, register, setValue, formState, handleSubmit } =
    useGeneralInfoForm(data)

  const { isSubmitting, errors } = formState

  function handleChangeHotelExempted(value: boolean) {
    if (value) {
      setValue('exemptedStateCompanyRegNumber', true)
      setValue('stateCompanyRegNumber', '')
    } else {
      setValue('exemptedStateCompanyRegNumber', false)
    }
  }

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
    setShouldDisplayConfirmationAlert(false)
    setShouldDisplaySuccessFeedback(false)
    setOpen(false)
  }

  async function handleUpdateGeneralInfo(data: GeranalInfoFormType) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      handleDisplaySuccessFeedback()
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <B2BPattern.Popups.Modal.Root open={open} onOpenChange={setOpen}>
      {shouldDisplaySuccessFeedback ? (
        <SuccessFeedBack handleCloseDialog={handleCloseDialog} />
      ) : (
        <B2BPattern.Popups.Modal.Content className="p-0">
          <form
            id="general-info-form"
            className="flex flex-col items-start p-6"
            onSubmit={handleSubmit(handleUpdateGeneralInfo)}
          >
            <B2BPattern.Popups.Modal.Header
              title={
                shouldDisplayConfirmationAlert
                  ? 'Deseja salvar as alterações de Informações Gerais?'
                  : 'Informações Gerais'
              }
            />

            {!shouldDisplayConfirmationAlert && (
              <>
                <FormComponents.Input
                  label="Razão social"
                  className="mt-8"
                  type="text"
                  errorMessage={errors.corporateName?.message}
                  {...register('corporateName')}
                />

                <div className="mt-4 flex w-full items-center justify-between gap-12">
                  <div className="flex-1 space-y-4">
                    <FormComponents.Input
                      type="text"
                      label="CNPJ"
                      value={watch('taxPayerRegistryCode')}
                      errorMessage={errors.taxPayerRegistryCode?.message}
                      onChange={handleChangeTaxPayerRegistryCode}
                    />

                    <FormComponents.Input
                      type="text"
                      label="Inscrição Estadual"
                      disabled={watch('exemptedStateCompanyRegNumber')}
                      {...register('stateCompanyRegNumber')}
                      errorMessage={errors.stateCompanyRegNumber?.message}
                    />

                    <FormComponents.Select.Root
                      label="Tipo"
                      value={watch('type')}
                      onValueChange={(value) => setValue('type', value)}
                      errorMessage={errors.type?.message}
                    >
                      {HOTEL_TYPES.map((type) => (
                        <FormComponents.Select.Item
                          key={type.value}
                          text={type.label}
                          value={type.value}
                        />
                      ))}
                    </FormComponents.Select.Root>
                  </div>

                  <FormComponents.Checkbox.Root>
                    <FormComponents.Checkbox.Trigger
                      className="h-6 w-6"
                      defaultChecked={data.exemptedStateCompanyRegNumber}
                      onCheckedChange={handleChangeHotelExempted}
                    />

                    <FormComponents.Checkbox.Label className="text-base">
                      Isento
                    </FormComponents.Checkbox.Label>
                  </FormComponents.Checkbox.Root>
                </div>
              </>
            )}
          </form>

          <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
            {shouldDisplayConfirmationAlert ? (
              <>
                <FormComponents.Button
                  variant="ghost-primary"
                  type="button"
                  className="px-6"
                  onClick={handleGoBackToForm}
                  disabled={isSubmitting}
                >
                  Voltar
                </FormComponents.Button>

                <FormComponents.Button
                  type="submit"
                  className="px-6"
                  form="general-info-form"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Salvando...' : 'Salvar'}
                </FormComponents.Button>
              </>
            ) : (
              <>
                <FormComponents.Button
                  variant="ghost-primary"
                  type="button"
                  className="px-6"
                  onClick={handleCloseDialog}
                >
                  Voltar
                </FormComponents.Button>

                <FormComponents.Button
                  type="button"
                  className="px-6"
                  onClick={handleDisplayConfirmationAlert}
                >
                  Salvar
                </FormComponents.Button>
              </>
            )}
          </footer>
        </B2BPattern.Popups.Modal.Content>
      )}
    </B2BPattern.Popups.Modal.Root>
  )
}

type SuccessFeedBackProps = {
  handleCloseDialog: () => void
}

function SuccessFeedBack({ handleCloseDialog }: SuccessFeedBackProps) {
  return (
    <B2BPattern.Popups.Modal.Content className="p-0">
      <div className="flex items-center gap-4 p-6">
        <LuCheck className="text-success" size={24} />
        <span className="text-title-sm font-semibold text-primary">
          Alterações salvas com sucesso!
        </span>
      </div>
      <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
        <FormComponents.Button
          type="button"
          className="px-6"
          onClick={handleCloseDialog}
        >
          Fechar
        </FormComponents.Button>
      </footer>
    </B2BPattern.Popups.Modal.Content>
  )
}
