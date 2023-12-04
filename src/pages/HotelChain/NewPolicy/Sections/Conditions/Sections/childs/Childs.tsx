import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import Toggler from '@/components/interactionComponents/switch/Switch';
import { B2BPattern } from '@/components/pattern';
import UseChildHook from './hooks/UseChildHook';
import { TextField } from '@mui/material';
import LanguageTabs from '@/components/languageTabs/languageTabs';
import TextFieldB2b from '@/components/formComponents/TextField';

export default function Childs({ policy }: { policy: any }) {
  const {
    edit,
    setEdit,
    allowChild,
    setAllowChild,
    courtesyChild,
    setCourtesyChild,
    childUntilAge,
    setChildUntilAge,
    howManyChilds,
    setHowManyChilds,
    childUntilAgeForCortesy,
    setChildUntilAgeForCortesy,
    languageRules,
    setLanguageRules,
    submit,
  } = UseChildHook({ policy });

  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Crianças"
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
              enabled={allowChild}
              setEnabled={() => {
                setAllowChild(!allowChild);
              }}
            />
            <p>Permite Crianças</p>
          </div>
          {allowChild && (
            <div className="flex flex-col gap-4 ml-4 w-full">
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Idade Limite</label>
                <TextFieldB2b
                  disabled={!edit}
                  value={childUntilAge}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setChildUntilAge(+event.target.value);
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
              enabled={courtesyChild}
              setEnabled={() => {
                setCourtesyChild(!courtesyChild);
              }}
            />
            <p>Cortesias</p>
          </div>
          {courtesyChild && (
            <div className="flex flex-col gap-4 ml-4 w-full">
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Qtde Cortesias</label>
                <TextFieldB2b
                  disabled={!edit}
                  value={howManyChilds}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setHowManyChilds(+event.target.value);
                  }}
                />
              </div>
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Idade Limite</label>
                <TextFieldB2b
                  disabled={!edit}
                  value={childUntilAgeForCortesy}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setChildUntilAgeForCortesy(+event.target.value);
                  }}
                />
              </div>
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
