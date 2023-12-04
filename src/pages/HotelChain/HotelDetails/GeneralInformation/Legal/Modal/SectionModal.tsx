// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

// Icons
import { Upload } from '@/common/icons'

import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import SuccessFeedBack from '@/components/Popups/Modal/SuccessFeedBack'
import SectionForm from '../Form/form'
import useLegalInfoForm from '../hooks/useLegalInfoForm'

type SectionModalProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

export function SectionModal({ open, setOpen }: SectionModalProps) {
  const {
    UsersHome: {
      hook: { hotelsChain },
    },
  } = useUsersHomeEntityContext()

  const {
    watch,
    trigger,
    register,
    setValue,
    isSubmitting,
    errors,
    handleSubmit,
  } = SectionForm(hotelsChain.responsible)

  const {
    handleChangeTaxPayerRegistryCode,
    handleDisplayConfirmationAlert,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateLegalInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  } = useLegalInfoForm({
    setOpen,
    trigger,
    setValue,
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
                  value={watch('fullName')}
                  {...register('fullName')}
                  errorMessage={errors.fullName?.message}
                />

                <FormComponents.Input
                  className="mt-6"
                  type="text"
                  label="Cargo"
                  value={watch('role')}
                  {...register('role')}
                  errorMessage={errors.role?.message}
                />

                <FormComponents.Input
                  className="mt-6"
                  type="text"
                  label="CPF"
                  value={watch('taxPayerCode')}
                  onChange={handleChangeTaxPayerRegistryCode}
                  errorMessage={errors.taxPayerCode?.message}
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
                  form="legal-info-form"
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
