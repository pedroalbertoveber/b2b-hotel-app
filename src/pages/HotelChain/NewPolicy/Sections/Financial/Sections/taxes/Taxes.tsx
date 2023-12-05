import { TaxesInterface } from './interface/type'
import PaymentType from './components/PaymentType'
import UseTaxesHook from './hook/UseTaxesHook'
import { B2BPattern } from '@/components'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'

// TODO Entender regra de negócio para poder aplicar
export default function Taxes({ policy }: { policy: any }) {
  const { edit, setEdit, enabled, setEnabled, taxesData } = UseTaxesHook()

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Taxas"
        isEditing={edit}
        handle={() => {
          setEdit(!edit)
        }}
      />

      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center gap-8">
          {taxesData.map((e: TaxesInterface, i) => {
            return (
              <div
                key={i}
                className="flex w-full items-center justify-center gap-4"
              >
                <div className="flex w-full">
                  <FormComponents.Switch.Root>
                    <FormComponents.Switch.Thumb
                      disabled={!edit}
                      checked={enabled[i]}
                      onCheckedChange={() => {
                        const aux = [...enabled]
                        aux[i] = !aux[i]
                        setEnabled(aux)
                      }}
                    />
                  </FormComponents.Switch.Root>
                </div>
                <div className="flex w-full">
                  <p className="break-all font-semibold">{e.title}</p>
                </div>
                <div className="flex w-full">
                  <PaymentType tax={e} disabled={!edit} />
                </div>
                <div className="flex w-full">
                  <input
                    disabled={!edit}
                    className="w-full border-b pb-1"
                    placeholder="Valor"
                    type="text"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
