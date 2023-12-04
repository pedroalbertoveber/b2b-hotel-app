// Core
import { useEffect, useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import SuccessFeedBack from '@/components/Popups/Modal/SuccessFeedBack'
import SectionForm from '../form/form'
import useAditionalContactHook from '../Hooks/useAditionalContactHook'
import { Contact } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'

type SectionModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  index: number | null
}

export default function SectionModal({
  open,
  setOpen,
  index,
}: SectionModalProps) {
  const {
    UsersHome: {
      hook: { hotelsChain },
    },
  } = useUsersHomeEntityContext()

  const { register, isSubmitting, errors, handleSubmit } = SectionForm()

  const {
    handleDisplayConfirmationAlert,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateGeneralInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  } = useAditionalContactHook({
    setOpen,
  })

  const [contact, setContact] = useState<Contact | null>(
    index !== null ? hotelsChain.contacts[index] : null,
  )

  useEffect(() => {
    console.log(
      'contact - ',
      index !== null ? hotelsChain.contacts[index] : null,
    )
    setContact(index !== null ? hotelsChain.contacts[index] : null)
  }, [hotelsChain.contacts, index])

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
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="Nome"
                    type="text"
                    className="mt-8"
                    errorMessage={errors.name?.message}
                    {...register('name')}
                    value={contact ? contact.name : ''}
                  />
                  <FormComponents.Input
                    label="Tipo"
                    type="text"
                    className="mt-8"
                    errorMessage={errors.type?.message}
                    {...register('type')}
                    value={contact ? contact.type : ''}
                  />
                </div>
                <div className="flex gap-8">
                  <FormComponents.Input
                    label="Telefone"
                    type="text"
                    errorMessage={errors.cellphone?.message}
                    {...register('cellphone')}
                    value={contact ? contact.phone : ''}
                  />
                  <FormComponents.Input
                    label="E-mail"
                    type="text"
                    errorMessage={errors.email?.message}
                    {...register('email')}
                    value={contact ? contact.mail : ''}
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
