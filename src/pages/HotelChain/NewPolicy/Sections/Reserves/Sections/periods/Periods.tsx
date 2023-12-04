import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import Toggler from '@/components/interactionComponents/switch/Switch';
import { B2BPattern } from '@/components/pattern';
import Input from '@/components/formComponents/Input';
import UsePeriodsHook from './hooks/UsePeriodsHook';

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
  } = UsePeriodsHook({ policy });
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        disabled
        title="Janela de Compra"
        isEditing={edit}
        handle={() => {
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <div>
          <div className="flex gap-4">
            <Toggler
              disabled={!edit}
              enabled={lastMinuteReservations}
              setEnabled={() => {
                setLastMinuteReservations(!lastMinuteReservations);
                handleLastMinuteReservationsData();
              }}
            />
            <p>Aceita Reservas de Última Hora</p>
          </div>
          {lastMinuteReservations && (
            <div className="flex flex-col gap-4 my-6 w-full">
              <p className="font-bold">{Data[0].title}</p>
              {Data[0].childs.map((e, i: number) => {
                return (
                  <div
                    className="flex flex-col gap-4 ml-4 w-full"
                    key={i}
                  >
                    <div className="flex gap-4 w-full items-center">
                      <Toggler
                        disabled={!edit}
                        enabled={lastMinuteReservationsData[i].checked}
                        setEnabled={() => {
                          const aux = [...lastMinuteReservationsData];
                          aux[i].checked = !aux[i].checked;
                          setLastMinuteReservationsData(aux);
                        }}
                      />
                      <p className="w-1/2">{e.title}</p>
                      <div>
                        <Input
                          disabled={!edit}
                          type="number"
                          placeholder="0"
                          value={lastMinuteReservationsData[i].value}
                          onChange={(e: any) => {
                            const aux = [...lastMinuteReservationsData];
                            aux[i].value = parseInt(e.target.value);
                            setLastMinuteReservationsData(aux);
                          }}
                          row={true}
                          className={`${
                            lastMinuteReservationsData[i].checked
                              ? ''
                              : 'opacity-30'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <div className="flex gap-4">
            <Toggler
              disabled={!edit}
              enabled={earlyReservations}
              setEnabled={() => {
                setEarlyReservations(!earlyReservations);
                handleEarlyReservationsData();
              }}
            />
            <p>Aceita Reservas com Maior Antecedência</p>
          </div>
          {earlyReservations && (
            <div className="flex flex-col gap-4 my-6">
              <p className="font-bold">{Data[1].title}</p>
              {Data[1].childs.map((e, i: number) => {
                return (
                  <div
                    className="flex flex-col gap-4 ml-4"
                    key={i}
                  >
                    <div className="flex gap-4">
                      <Toggler
                        disabled={!edit}
                        enabled={earlyReservationsData[i].checked}
                        setEnabled={() => {
                          const aux = [...earlyReservationsData];
                          aux[i].checked = !aux[i].checked;
                          setEarlyReservationsData(aux);
                        }}
                      />
                      <p className="w-1/2">{e.title}</p>
                      <div>
                        <Input
                          disabled={!edit}
                          type="number"
                          placeholder="0"
                          value={earlyReservationsData[i].value}
                          onChange={(e: any) => {
                            const aux = [...earlyReservationsData];
                            aux[i].value = parseInt(e.target.value);
                            setEarlyReservationsData(aux);
                          }}
                          row={true}
                          className={`${
                            earlyReservationsData[i].checked ? '' : 'opacity-30'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
