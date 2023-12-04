// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import SuccessFeedBack from '@/components/Popups/Modal/SuccessFeedBack'
import SectionForm from '../form/form'
import useMainContactHook from '../Hooks/useMainContactHook'

type SectionModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function SectionModal({ open, setOpen }: SectionModalProps) {
  const {
    UsersHome: {
      hook: { hotelsChain },
    },
  } = useUsersHomeEntityContext()

  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

  const { watch, register, isSubmitting, errors, handleSubmit } =
    SectionForm(hotelsChain)

  const {
    handleDisplayConfirmationAlert,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateGeneralInfo,
  } = useMainContactHook({
    setOpen,
    setShouldDisplayConfirmationAlert,
    setShouldDisplaySuccessFeedback,
  })

  return (
    <B2BPattern.Popups.Modal.Root
      open={open}
      onOpenChange={(res) => {
        setOpen(res)
        handleCloseDialog()
      }}
    >
      {shouldDisplaySuccessFeedback ? (
        <SuccessFeedBack handleCloseDialog={handleCloseDialog} />
      ) : (
        <B2BPattern.Popups.Modal.Content className="p-0">
          <form
            id="main-contact-form"
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
              <div className="flex w-full flex-col gap-8">
                <FormComponents.Input
                  label="Nome"
                  type="text"
                  className="mt-8"
                  errorMessage={errors.name?.message}
                  {...register('name')}
                  value={watch('name')}
                />
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="Telefone"
                    type="text"
                    errorMessage={errors.cellphone?.message}
                    {...register('cellphone')}
                    value={watch('cellphone')}
                  />
                  <FormComponents.Input
                    label="E-mail"
                    type="text"
                    errorMessage={errors.email?.message}
                    {...register('email')}
                    value={watch('email')}
                  />
                </div>
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="País"
                    type="text"
                    errorMessage={errors.country?.message}
                    {...register('country')}
                    value={watch('country')}
                  />
                  <FormComponents.Input
                    label="Estado"
                    type="text"
                    errorMessage={errors.state?.message}
                    {...register('state')}
                    value={watch('state')}
                  />
                </div>
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="Cidade"
                    type="text"
                    errorMessage={errors.city?.message}
                    {...register('city')}
                    value={watch('city')}
                  />
                  <FormComponents.Input
                    label="Bairro"
                    type="text"
                    errorMessage={errors.neighborhood?.message}
                    {...register('neighborhood')}
                    value={watch('neighborhood')}
                  />
                </div>
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="Endereço"
                    type="text"
                    errorMessage={errors.street?.message}
                    {...register('street')}
                    value={watch('street')}
                  />
                  <FormComponents.Input
                    label="Número"
                    type="text"
                    errorMessage={errors.number?.message}
                    {...register('number')}
                    value={watch('number')}
                  />
                </div>
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="CEP"
                    type="text"
                    errorMessage={errors.cep?.message}
                    {...register('cep')}
                    value={watch('cep')}
                  />
                  <FormComponents.Input
                    label="Complemento (opcional)"
                    type="text"
                    errorMessage={errors.complement?.message}
                    {...register('complement')}
                    value={watch('complement')}
                  />
                </div>
              </div>
            )}
          </form>

          <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
            {shouldDisplayConfirmationAlert && (
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
                  form="main-contact-form"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Salvando...' : 'Salvar'}
                </FormComponents.Button>
              </>
            )}

            {!shouldDisplayConfirmationAlert && (
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
                  Avançar
                </FormComponents.Button>
              </>
            )}
          </footer>
        </B2BPattern.Popups.Modal.Content>
      )}
    </B2BPattern.Popups.Modal.Root>
  )
}
