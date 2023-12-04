// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

// Mock
import { HOTEL_TYPES } from '@/common/mocks/hotel-types'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import SuccessFeedBack from '@/components/Popups/Modal/SuccessFeedBack'
import SectionForm from '../Form/form'
import useGeneralHook from '../Hooks/useGeneralHook'

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

  const {
    watch,
    trigger,
    register,
    setValue,
    isSubmitting,
    errors,
    handleSubmit,
  } = SectionForm(hotelsChain)

  const {
    handleChangeHotelExempted,
    handleChangeTaxPayerRegistryCode,
    handleDisplayConfirmationAlert,
    handleGoBackToForm,
    handleCloseDialog,
    handleUpdateGeneralInfo,
    shouldDisplayConfirmationAlert,
    shouldDisplaySuccessFeedback,
  } = useGeneralHook({
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
                      value={
                        watch('exemptedStateCompanyRegNumber')
                          ? 'Isento'
                          : watch('stateCompanyRegNumber')
                      }
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
                      defaultChecked={hotelsChain.exemptedStateCompanyRegNumber}
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
                  form="general-info-form"
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
