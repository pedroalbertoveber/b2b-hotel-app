import { B2BPattern } from '@/components'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { Input } from 'postcss'
import UsePeriodsHook from './hooks/UsePeriodsHook'
import { FormComponents } from '@/components/FormComponents'

export default function Periods({ policy }: { policy: any }) {
  const {
    Data,
    edit,
    setEdit,
    lastMinuteReservations,
    setLastMinuteReservations,
    lastMinuteReservationsData,
    setLastMinuteReservationsData,
    handleLastMinuteReservationsData,
    earlyReservations,
    setEarlyReservations,
    earlyReservationsData,
    setEarlyReservationsData,
    handleEarlyReservationsData,
  } = UsePeriodsHook({ policy })
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        disabled
        title="Janela de Compra"
        isEditing={edit}
        handle={() => {
          setEdit(!edit)
        }}
      />

      <div
        className={`flex w-full flex-col items-start justify-start gap-8 ${
          !edit ? 'opacity-75' : ''
        }`}
      >
        <div>
          <div className="flex gap-4">
            <FormComponents.Switch.Root>
              <FormComponents.Switch.Thumb
                disabled={!edit}
                checked={lastMinuteReservations}
                onCheckedChange={() => {
                  setLastMinuteReservations(!lastMinuteReservations)
                  handleLastMinuteReservationsData()
                }}
              />
            </FormComponents.Switch.Root>
            <p>Aceita Reservas de Última Hora</p>
          </div>
          {lastMinuteReservations && (
            <div className="my-6 flex w-full flex-col gap-4">
              <p className="font-bold">{Data[0].title}</p>
              {Data[0].childs.map((e, i: number) => {
                return (
                  <div className="ml-4 flex w-full flex-col gap-4" key={i}>
                    <div className="flex w-full items-center gap-4">
                      <FormComponents.Switch.Root>
                        <FormComponents.Switch.Thumb
                          disabled={!edit}
                          checked={lastMinuteReservationsData[i].checked}
                          onCheckedChange={() => {
                            const aux = [...lastMinuteReservationsData]
                            aux[i].checked = !aux[i].checked
                            setLastMinuteReservationsData(aux)
                          }}
                        />
                      </FormComponents.Switch.Root>
                      <p className="w-1/2">{e.title}</p>
                      <div>
                        <FormComponents.Input
                          disabled={!edit}
                          type="number"
                          placeholder="0"
                          value={lastMinuteReservationsData[i].value}
                          onChange={(e: any) => {
                            const aux = [...lastMinuteReservationsData]
                            aux[i].value = parseInt(e.target.value)
                            setLastMinuteReservationsData(aux)
                          }}
                          className={`${
                            lastMinuteReservationsData[i].checked
                              ? ''
                              : 'opacity-30'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div>
          <div className="flex gap-4">
            <FormComponents.Switch.Root>
              <FormComponents.Switch.Thumb
                disabled={!edit}
                checked={earlyReservations}
                onCheckedChange={() => {
                  setEarlyReservations(!earlyReservations)
                  handleEarlyReservationsData()
                }}
              />
            </FormComponents.Switch.Root>
            <p>Aceita Reservas com Maior Antecedência</p>
          </div>
          {earlyReservations && (
            <div className="my-6 flex flex-col gap-4">
              <p className="font-bold">{Data[1].title}</p>
              {Data[1].childs.map((e, i: number) => {
                return (
                  <div className="ml-4 flex flex-col gap-4" key={i}>
                    <div className="flex gap-4">
                      <FormComponents.Switch.Root>
                        <FormComponents.Switch.Thumb
                          disabled={!edit}
                          checked={earlyReservationsData[i].checked}
                          onCheckedChange={() => {
                            const aux = [...earlyReservationsData]
                            aux[i].checked = !aux[i].checked
                            setEarlyReservationsData(aux)
                          }}
                        />
                      </FormComponents.Switch.Root>
                      <p className="w-1/2">{e.title}</p>
                      <div>
                        <FormComponents.Input
                          disabled={!edit}
                          type="number"
                          placeholder="0"
                          value={earlyReservationsData[i].value}
                          onChange={(e: any) => {
                            const aux = [...earlyReservationsData]
                            aux[i].value = parseInt(e.target.value)
                            setEarlyReservationsData(aux)
                          }}
                          className={`${
                            earlyReservationsData[i].checked ? '' : 'opacity-30'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
