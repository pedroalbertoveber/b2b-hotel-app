// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

// Icons
import { LuCheck } from 'react-icons/lu'

// Form
// import { Form } from '../Schema/schema'
// import { SectionForm } from '../form/form'

type SectionModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data: any
}

export default function SectionModal({
  open,
  setOpen, // data,
}: SectionModalProps) {
  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

  // const { register, handleSubmit, errors, isSubmitting, getValues } =
  //   SectionForm({
  //     data,
  //   })

  function handleDisplayConfirmationAlert() {
    setShouldDisplayConfirmationAlert(true)
  }

  function handleDisplaySuccessFeedback() {
    setShouldDisplaySuccessFeedback(true)
  }

  function handleCloseDialog() {
    setShouldDisplayConfirmationAlert(false)
    setShouldDisplaySuccessFeedback(false)
    setOpen(false)
  }

  return (
    <B2BPattern.Popups.Modal.Root open={open} onOpenChange={setOpen}>
      {shouldDisplaySuccessFeedback ? (
        <SuccessFeedBack handleCloseDialog={handleCloseDialog} />
      ) : shouldDisplayConfirmationAlert ? (
        <ConfirmationAlert
          handleCloseDialog={handleCloseDialog}
          handleDisplaySuccessFeedback={handleDisplaySuccessFeedback}
        />
      ) : (
        <B2BPattern.Popups.Modal.Content className="p-0">
          <div className="flex flex-col items-start p-6">
            <B2BPattern.Popups.Modal.Header title="Informações Gerais" />

            <FormComponents.Input
              label="Razão social"
              className="mt-8"
              type="text"
            />

            <div className="mt-4 flex w-full items-center justify-between gap-12">
              <div className="flex-1 space-y-4">
                <FormComponents.Input label="CNPJ" type="text" />

                <FormComponents.Input label="Inscrição Estadual" type="text" />

                <FormComponents.Input
                  label="Tipe de Estabelecimento"
                  type="text"
                />
              </div>

              <FormComponents.Checkbox.Root>
                <FormComponents.Checkbox.Trigger className="h-6 w-6" />

                <FormComponents.Checkbox.Label className="text-base">
                  Isento
                </FormComponents.Checkbox.Label>
              </FormComponents.Checkbox.Root>
            </div>
          </div>
          <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
            <FormComponents.Button
              variant="ghost-primary"
              type="button"
              className="px-6"
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
          </footer>
        </B2BPattern.Popups.Modal.Content>
      )}
    </B2BPattern.Popups.Modal.Root>
  )
}

type ConfirmationAlertProps = {
  handleDisplaySuccessFeedback: () => void
  handleCloseDialog: () => void
}

export function ConfirmationAlert({
  handleDisplaySuccessFeedback,
  handleCloseDialog,
}: ConfirmationAlertProps) {
  return (
    <B2BPattern.Popups.Modal.Content className="p-0">
      <div className="flex flex-col items-start p-6">
        <B2BPattern.Popups.Modal.Header title="Deseja salvar as alterações de Informações Gerais?" />
      </div>
      <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
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
          onClick={handleDisplaySuccessFeedback}
        >
          Salvar
        </FormComponents.Button>
      </footer>
    </B2BPattern.Popups.Modal.Content>
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
          Salvar
        </FormComponents.Button>
      </footer>
    </B2BPattern.Popups.Modal.Content>
  )
}
