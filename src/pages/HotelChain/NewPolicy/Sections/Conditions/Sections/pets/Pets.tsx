import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import Toggler from '@/components/interactionComponents/switch/Switch';
import { B2BPattern } from '@/components/pattern';
import UsePetsHook from './hooks/UsePetsHook';
import LanguageTabs from '@/components/languageTabs/languageTabs';

export default function Pets({ policy }: { policy: any }) {
  const {
    allowPets,
    setAllowPets,
    edit,
    setEdit,
    languageRules,
    setLanguageRules,
    submit,
  } = UsePetsHook({
    policy,
  });

  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Pets"
        isEditing={edit}
        handle={() => {
          if (edit) submit();
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <div className="flex gap-4">
          <Toggler
            disabled={!edit}
            enabled={allowPets}
            setEnabled={() => {
              setAllowPets(!allowPets);
            }}
          />
          <p>Permite Pets</p>
        </div>
        {allowPets && (
          <LanguageTabs
            value={languageRules}
            set={setLanguageRules}
          />
        )}
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
