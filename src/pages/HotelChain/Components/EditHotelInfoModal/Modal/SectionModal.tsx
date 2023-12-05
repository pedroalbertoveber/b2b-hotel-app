// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'

import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import SuccessFeedBack from '@/components/Popups/Modal/SuccessFeedBack'
import SectionForm from '../Form/form'
import useGeneralHook from '../Hooks/useEditHotelInfoHook'
import Dropzone from '@/components/Interactive/Dropzone'

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
  } = SectionForm()

  const {
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

            <div className="mb-4 flex w-full items-center justify-center">
              <Dropzone register={register('logo')} />
            </div>

            {!shouldDisplayConfirmationAlert && (
              <>
                <FormComponents.Input
                  label="Nome da Empresa"
                  className="mt-8"
                  type="text"
                  errorMessage={errors.name?.message}
                  {...register('name')}
                  value={hotelsChain.name}
                />

                <FormComponents.Input
                  label="Site"
                  className="mt-8"
                  type="text"
                  errorMessage={errors.site?.message}
                  {...register('site')}
                />
                <FormComponents.Input
                  label="Facebook"
                  className="mt-8"
                  type="text"
                  errorMessage={errors.facebook?.message}
                  {...register('facebook')}
                />
                <FormComponents.Input
                  label="Instagram"
                  className="mt-8"
                  type="text"
                  errorMessage={errors.instagram?.message}
                  {...register('instagram')}
                />
                <FormComponents.Input
                  label="Twitter"
                  className="mt-8"
                  type="text"
                  errorMessage={errors.twitter?.message}
                  {...register('twitter')}
                />
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
