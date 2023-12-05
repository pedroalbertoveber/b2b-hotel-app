import { B2BPattern } from '@/components'
import UseCancellationHook from './hooks/UseCancellationHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'
export default function Cancellation({ policy }: { policy: any }) {
  const {
    penaltys,
    allowCancellationWithoutPenalty,
    setAllowCancellationWithoutPenalty,
    howManyHoursBeforePenalty,
    setHowManyHoursBeforePenalty,
    cancellationPenalty,
    setCancellationPenalty,
    cancellationPenaltyOptions,
    cancellationPenaltyValue,
    setCancellationPenaltyValue,
    handleCheckPenalty,
    languageRules,
    setLanguageRules,
    edit,
    setEdit,
    submit,
  } = UseCancellationHook({ policy })
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Alterações e Cancelamentos"
        isEditing={edit}
        handle={() => {
          if (edit) submit()
          setEdit(!edit)
        }}
      />

      <div
        className={`flex w-full flex-col items-start justify-start gap-8 ${
          !edit ? 'opacity-75' : ''
        }`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <FormComponents.Switch.Root>
              <FormComponents.Switch.Thumb
                disabled={!edit}
                checked={allowCancellationWithoutPenalty}
                onCheckedChange={() => {
                  setAllowCancellationWithoutPenalty(
                    !allowCancellationWithoutPenalty,
                  )
                }}
              />
            </FormComponents.Switch.Root>
            <p>Cancelamento ou alteração sem ônus</p>
          </div>
          {allowCancellationWithoutPenalty && (
            <div className="ml-4 flex w-full flex-col gap-4">
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Horas Limite</label>
                <FormComponents.Input
                  disabled={!edit}
                  value={howManyHoursBeforePenalty}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setHowManyHoursBeforePenalty(+event.target.value)
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <FormComponents.Switch.Root>
              <FormComponents.Switch.Thumb
                disabled={!edit}
                checked={cancellationPenalty}
                onCheckedChange={() => {
                  setCancellationPenalty(!cancellationPenalty)
                  handleCheckPenalty()
                }}
              />
            </FormComponents.Switch.Root>
            <p>Multa de Cancelamento</p>
          </div>
          {cancellationPenalty && (
            <div className="ml-4 flex w-full flex-col gap-4">
              {penaltys.map((e, i) => {
                return (
                  <div className="flex gap-4" key={i}>
                    <FormComponents.Switch.Root>
                      <FormComponents.Switch.Thumb
                        disabled={!edit}
                        checked={cancellationPenaltyOptions[i]}
                        onCheckedChange={() => {
                          handleCheckPenalty(i)
                        }}
                      />
                    </FormComponents.Switch.Root>
                    <p>{e.title}</p>
                    {edit && cancellationPenaltyOptions[i] && i > 0 && (
                      <div>
                        <FormComponents.Input
                          type="number"
                          value={cancellationPenaltyValue[i]}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                          ) => {
                            const aux = [...cancellationPenaltyValue]
                            aux[i] = +event.target.value
                            setCancellationPenaltyValue(aux)
                          }}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* <LanguageTabs value={languageRules} set={setLanguageRules} /> */}
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
