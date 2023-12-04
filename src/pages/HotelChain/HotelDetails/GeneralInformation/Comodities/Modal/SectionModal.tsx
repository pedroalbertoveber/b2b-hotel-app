// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

// Libs
import { FormProvider, useFormContext } from 'react-hook-form'

// Schema
import type { ComoditiesFormSchemaType } from '../Schema/schema'

// Icons
import { LuCheck } from 'react-icons/lu'

// Mocks
import {
  type AmentityType,
  ACCESSIBILITY_AMENITITES,
  ADDITIONALS_AMENITITES,
  BASICS_AMENITITES,
  COMODITIES_AMENITITES,
  INSTALATIONS_AMENITITES,
  PERMISSIONS_AMENITITES,
  SECURITY_AMENITITES,
  SPORTS_AMENTITIES,
} from '@/common/mocks/amentities'

// Form
import { useComoditiesForm } from '../hooks/useComoditiesForm'

type SectionModalProps = {
  open: boolean
  data: any
  setOpen: (open: boolean) => void
}

export function SectionModal({ open, setOpen, data }: SectionModalProps) {
  const [shouldDisplayConfirmationAlert, setShouldDisplayConfirmationAlert] =
    useState(false)

  const [shouldDisplaySuccessFeedback, setShouldDisplaySuccessFeedback] =
    useState(false)

  const methods = useComoditiesForm(data)

  async function handleDisplayConfirmationAlert() {
    const result = await methods.trigger()

    if (result) {
      setShouldDisplayConfirmationAlert(true)
    }
  }

  // function handleDisplaySuccessFeedback() {
  //   setShouldDisplaySuccessFeedback(true)
  // }

  function handleGoBackToForm() {
    setShouldDisplayConfirmationAlert(false)
  }

  function handleCloseDialog() {
    setShouldDisplayConfirmationAlert(false)
    setShouldDisplaySuccessFeedback(false)
    setOpen(false)
  }

  // async function handleUpdateGeneralInfo(data: any) {
  //   try {
  //     console.log(data)
  //     await new Promise((resolve) => setTimeout(resolve, 2000))
  //     handleDisplaySuccessFeedback()
  //   } catch (error: any) {
  //     console.log(error)
  //   }
  // }

  return (
    <B2BPattern.Popups.Modal.Root open={open} onOpenChange={setOpen}>
      {shouldDisplaySuccessFeedback ? (
        <SuccessFeedBack handleCloseDialog={handleCloseDialog} />
      ) : (
        <B2BPattern.Popups.Modal.Content className="overflow-auto p-0 md:max-h-[600px] md:max-w-[700px]">
          <FormProvider {...methods}>
            <form
              id="general-info-form"
              className="flex flex-col items-start p-6"
              // onSubmit={handleSubmit(handleUpdateGeneralInfo)}
            >
              <B2BPattern.Popups.Modal.Header
                title={
                  shouldDisplayConfirmationAlert
                    ? 'Deseja salvar as alterações de Comodidades?'
                    : 'Comodidades'
                }
              />

              {!shouldDisplayConfirmationAlert && (
                <>
                  <Accordion
                    className="mt-6 w-full"
                    defaultValue="BASICS"
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="BASICS">
                      <AccordionTrigger className="text-primary">
                        Básico
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {BASICS_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="INSTLATIONS">
                      <AccordionTrigger className="text-primary">
                        Instalações
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {INSTALATIONS_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="COMODITIES">
                      <AccordionTrigger className="text-primary">
                        Comodidades
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {COMODITIES_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="SPORTS">
                      <AccordionTrigger className="text-primary">
                        Esportes e Lazer
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {SPORTS_AMENTITIES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="SECURITY">
                      <AccordionTrigger className="text-primary">
                        Segurança
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {SECURITY_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ACCESIBILITY">
                      <AccordionTrigger className="text-primary">
                        Acessibilidade
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {ACCESSIBILITY_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ADDITIONALS">
                      <AccordionTrigger className="text-primary">
                        Adicionais
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {ADDITIONALS_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="PERMISSIONS">
                      <AccordionTrigger className="text-primary">
                        Permissões
                      </AccordionTrigger>
                      <AccordionContent className="grid w-full grid-cols-[1fr_110px_110px_110px] gap-x-6 gap-y-4">
                        <div />
                        <span className="text-center">Não possui</span>
                        <span className="text-center">Incluso na tarifa</span>
                        <span className="text-center">Cobrado à parte</span>

                        {PERMISSIONS_AMENITITES.map((item) => (
                          <AmentityItem key={item.name} {...item} />
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </>
              )}
            </form>
          </FormProvider>

          <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
            {shouldDisplayConfirmationAlert ? (
              <>
                <FormComponents.Button
                  variant="ghost-primary"
                  type="button"
                  className="px-6"
                  onClick={handleGoBackToForm}
                  disabled={methods.formState.isSubmitting}
                >
                  Voltar
                </FormComponents.Button>

                <FormComponents.Button
                  type="submit"
                  className="px-6"
                  form="general-info-form"
                  disabled={methods.formState.isSubmitting}
                >
                  {methods.formState.isSubmitting ? 'Salvando...' : 'Salvar'}
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

export function AmentityItem({ icon: Icon, name }: AmentityType) {
  const { setValue, getValues } = useFormContext<ComoditiesFormSchemaType>()

  function handleChangeOptionValue(value: string) {
    if (value === 'not-have') {
      const prevValues = getValues('amentities')
      setValue(
        'amentities',
        prevValues.filter((item) => item.amentityId.toString() !== name),
      )
    } else if (value === 'included') {
      const prevValues = getValues('amentities')
      setValue('amentities', [
        ...prevValues,
        {
          amentityId: 1,
          includedInRate: true,
        },
      ])
    } else {
      const prevValues = getValues('amentities')
      setValue('amentities', [
        ...prevValues,
        {
          amentityId: 1,
          includedInRate: false,
        },
      ])
    }
  }

  return (
    <>
      <div className="flex w-full items-start gap-2">
        <Icon />

        <span>{name}</span>
      </div>
      <RadioGroup
        defaultValue="not-have"
        className="col-span-3 grid grid-cols-3"
        onValueChange={handleChangeOptionValue}
      >
        <RadioGroupItem value="not-have" className="mx-auto" />
        <RadioGroupItem value="included" className="mx-auto" />
        <RadioGroupItem value="not-included" className="mx-auto" />
      </RadioGroup>
    </>
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
