// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

// Icons
import { Upload } from '@/common/icons'
import { LuCheck } from 'react-icons/lu'

// Form
import { useLegalInfoForm } from '../hooks/useLegalInfoForm'

import type { LegalInfoFormType } from '../Schema/schema'

// Utils
import { createCpfMask } from '@/utils/inputMasks'

type SectionModalProps = {
  open: boolean
  data: any
  setOpen: (open: boolean) => void
}

export function SectionModal({ open, data, setOpen }: SectionModalProps) {
  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

  const { watch, trigger, register, setValue, formState, handleSubmit } =
    useLegalInfoForm(data)

  // const { isSubmitting, errors } = formState

  function handleChangeTaxPayerRegistryCode(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const formattedValue = createCpfMask(event.target.value)
    setValue('taxPayerCode', formattedValue)
  }

  async function handleDisplayConfirmationAlert() {
    const result = await trigger()
    console.log(result)
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

  async function handleUpdateLegalInfo(data: LegalInfoFormType) {
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
            id="legal-info-form"
            className="flex flex-col items-start p-6"
            onSubmit={handleSubmit(handleUpdateLegalInfo)}
          >
            <B2BPattern.Popups.Modal.Header
              title={
                shouldDisplayConfirmationAlert
                  ? 'Deseja salvar as alterações de Informações Legais?'
                  : 'Informações Legais'
              }
            />

            {!shouldDisplayConfirmationAlert && (
              <>
                <FormComponents.Input
                  label="Responsável"
                  className="mt-8"
                  type="text"
                  {...register('fullName')}
                  errorMessage={formState.errors.fullName?.message}
                />

                <FormComponents.Input
                  className="mt-6"
                  type="text"
                  label="Cargo"
                  {...register('role')}
                  errorMessage={formState.errors.role?.message}
                />

                <FormComponents.Input
                  className="mt-6"
                  type="text"
                  label="CPF"
                  value={watch('taxPayerCode')}
                  onChange={handleChangeTaxPayerRegistryCode}
                  errorMessage={formState.errors.taxPayerCode?.message}
                />

                <FormComponents.Switch.Root className="mt-6">
                  <FormComponents.Switch.Label>
                    É regido pelo mesmo contrato da rede?
                  </FormComponents.Switch.Label>

                  <FormComponents.Switch.Thumb />
                </FormComponents.Switch.Root>

                <div className="mt-4 flex w-auto flex-col items-start justify-start gap-2">
                  <input
                    type="file"
                    className="sr-only"
                    id="b2b-contract-file"
                  />
                  <label
                    htmlFor="b2b-contract-file"
                    className="flex cursor-pointer items-center justify-start gap-2 rounded-[0.375rem] border border-primary px-2 py-1"
                  >
                    <Upload />

                    <span className="text-xs font-bold uppercase text-primary">
                      Anexar Contrato B2B
                    </span>
                  </label>

                  <small className="text-xs text-gray-300">
                    Tipos de arquivos válidos: pdf, png ou jpg.
                  </small>
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
                >
                  Voltar
                </FormComponents.Button>

                <FormComponents.Button
                  type="submit"
                  className="px-6"
                  form="legal-info-form"
                >
                  Salvar
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
