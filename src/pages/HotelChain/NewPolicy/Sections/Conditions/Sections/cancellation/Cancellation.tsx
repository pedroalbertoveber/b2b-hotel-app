import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import Toggler from '@/components/interactionComponents/switch/Switch';
import { B2BPattern } from '@/components/pattern';
import UseCancellationHook from './hooks/UseCancellationHook';
import { TextField } from '@mui/material';
import LanguageTabs from '@/components/languageTabs/languageTabs';
import TextFieldB2b from '@/components/formComponents/TextField';

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
  } = UseCancellationHook({ policy });
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Alterações e Cancelamentos"
        isEditing={edit}
        handle={() => {
          if (edit) submit();
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-8`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Toggler
              disabled={!edit}
              enabled={allowCancellationWithoutPenalty}
              setEnabled={() => {
                setAllowCancellationWithoutPenalty(
                  !allowCancellationWithoutPenalty
                );
              }}
            />
            <p>Cancelamento ou alteração sem ônus</p>
          </div>
          {allowCancellationWithoutPenalty && (
            <div className="flex flex-col gap-4 ml-4 w-full">
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Horas Limite</label>
                <TextFieldB2b
                  disabled={!edit}
                  value={howManyHoursBeforePenalty}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setHowManyHoursBeforePenalty(+event.target.value);
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Toggler
              disabled={!edit}
              enabled={cancellationPenalty}
              setEnabled={() => {
                setCancellationPenalty(!cancellationPenalty);
                handleCheckPenalty();
              }}
            />
            <p>Multa de Cancelamento</p>
          </div>
          {cancellationPenalty && (
            <div className="flex flex-col gap-4 ml-4 w-full">
              {penaltys.map((e, i) => {
                return (
                  <div
                    className="flex gap-4"
                    key={i}
                  >
                    <Toggler
                      disabled={!edit}
                      enabled={cancellationPenaltyOptions[i]}
                      setEnabled={() => {
                        handleCheckPenalty(i);
                      }}
                    />
                    <p>{e.title}</p>
                    {edit && cancellationPenaltyOptions[i] && i > 0 && (
                      <div>
                        <TextFieldB2b
                          variant="standard"
                          type="number"
                          value={cancellationPenaltyValue[i]}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const aux = [...cancellationPenaltyValue];
                            aux[i] = +event.target.value;
                            setCancellationPenaltyValue(aux);
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <LanguageTabs
          value={languageRules}
          set={setLanguageRules}
        />
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
