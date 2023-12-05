import { B2BPattern } from '@/components'
import UseCurrencyHook from './hook/UseCurrencyHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import SubTitle from '@/components/Texts/Subtitle'
import { FormComponents } from '@/components/FormComponents'
import { currencyCodes } from '@/data/currency'

export default function Currency({ policy }: { policy: any }) {
  const {
    currency,
    setCurrency,
    conversion,
    setConversion,
    edit,
    setEdit,
    handleSubmit,
  } = UseCurrencyHook({ policy })

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Moeda"
        isEditing={edit}
        handle={() => {
          if (edit) {
            handleSubmit()
          }
          setEdit(!edit)
        }}
      />
      <div className="grid grid-cols-1 gap-8">
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex flex-col">
            <SubTitle title="Selecione a Moeda da Política" />
            <p className="text-small">
              A moeda selecionada será a moeda aplicada na política da tarifa
            </p>
          </div>
          <div className="flex w-[80%] items-center justify-start">
            <div className="w-full">
              {/* <FormComponents.Select.Root
                options={currencyCodes}
                value={currency}
                onChange={(e: any) => {
                  if (e) setCurrency(e)
                }}
                disabled={!edit}
              >
                <FormComponents.Select.Item />
              </FormComponents.Select.Root> */}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex flex-col">
            <SubTitle title="Conversão Automática" />
            <p className="text-small">
              Selecionado a conversão automática o cliente tera o valor da
              tarifa convertida para a sua moeda local
            </p>
          </div>
          <div className="flex items-center justify-start">
            <FormComponents.Switch.Root>
              <FormComponents.Switch.Thumb
                checked={conversion}
                disabled={!edit}
                onCheckedChange={() => {
                  setConversion(!conversion)
                }}
                value={conversion}
              />
            </FormComponents.Switch.Root>
            <p>Conversão automática</p>
          </div>
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
