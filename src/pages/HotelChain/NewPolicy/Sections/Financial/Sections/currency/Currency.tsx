import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle'
import AutoCompleteB2B from '@/components/formComponents/AutoComplete'
import RadioSingle from '@/components/interactionComponents/radio/RadioSingle'
import { B2BPattern } from '@/components/pattern'
import { currencyCodes } from '@/globalData/currency'
import UseCurrencyHook from './hook/UseCurrencyHook'
import SectionSubtitle from '@/app/(dashboard)/profile/policy/components/SectionSubtitle'

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
    <B2BPattern.Containers.WhiteBox>
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
            <SectionSubtitle title="Selecione a Moeda da Política" />
            <p className="text-small">
              A moeda selecionada será a moeda aplicada na política da tarifa
            </p>
          </div>
          <div className="flex w-[80%] items-center justify-start">
            <div className="w-full">
              <AutoCompleteB2B
                options={currencyCodes}
                value={currency}
                onChange={(e: any) => {
                  if (e) setCurrency(e)
                }}
                disabled={!edit}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-4">
          <div className="flex flex-col">
            <SectionSubtitle title="Conversão Automática" />
            <p className="text-small">
              Selecionado a conversão automática o cliente tera o valor da
              tarifa convertida para a sua moeda local
            </p>
          </div>
          <div className="flex items-center justify-start">
            <RadioSingle
              checked={conversion}
              disabled={!edit}
              handleChange={() => {
                setConversion(!conversion)
              }}
              selectedValue={conversion}
            />
            <p>Conversão automática</p>
          </div>
        </div>
      </div>
    </B2BPattern.Containers.WhiteBox>
  )
}
