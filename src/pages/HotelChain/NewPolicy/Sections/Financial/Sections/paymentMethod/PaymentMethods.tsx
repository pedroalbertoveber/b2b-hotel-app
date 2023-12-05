import { B2BPattern } from '@/components'
import UsePaymentMethodHook from './hook/usePaymentMethod'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import SubTitle from '@/components/Texts/Subtitle'
import { FormComponents } from '@/components/FormComponents'
import CardDetails from './components/CardDetails'

export default function PaymentMethods({ policy }: { policy: any }) {
  const {
    edit,
    setEdit,
    enabled,
    setEnabled,
    cardOnlyPhysical,
    setCardOnlyPhysical,
    creditCards,
    setCreditCards,
    findPaymentMethods,
    handleSubmit,
    paymentMethodsDefault,
  } = UsePaymentMethodHook({ policy })

  findPaymentMethods()

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Formas de Pagamento"
        isEditing={edit}
        handle={() => {
          if (edit) {
            handleSubmit()
          }
          setEdit(!edit)
        }}
      />
      <div className="flex w-full flex-col items-start justify-start gap-4">
        <SubTitle title="Formas de Pagamento Aceitas" />
        {paymentMethodsDefault.map((e, i) => {
          return (
            <div className="flex flex-col gap-8" key={e.id}>
              <div className="flex gap-4">
                <FormComponents.Switch.Root>
                  <FormComponents.Switch.Thumb
                    disabled={!edit}
                    checked={enabled[i]}
                    onCheckedChange={() => {
                      const aux = [...enabled]
                      aux[i] = !aux[i]
                      setEnabled(aux)
                    }}
                  ></FormComponents.Switch.Thumb>
                </FormComponents.Switch.Root>
                <p>{e.title}</p>
              </div>
              {e.name === 'CREDIT_CARD' && enabled[i] && (
                <div className="mb-4 ml-8 flex flex-col gap-4">
                  <CardDetails
                    cardOnlyPhysical={cardOnlyPhysical}
                    setCardOnlyPhysical={setCardOnlyPhysical}
                    creditCards={creditCards}
                    setCreditCards={setCreditCards}
                    disabled={!edit}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
