import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import { B2BPattern } from '@/components/pattern';
import Toggler from '@/components/interactionComponents/switch/Switch';
import LanguageTabs from '@/components/languageTabs/languageTabs';
import UseSanitaryProtocolsHook from './hooks/UseSanitaryProtocolsHook';

export default function SanitaryProtocols({ policy }: { policy: any }) {
  const {
    languageRules,
    setLanguageRules,
    edit,
    setEdit,
    submit,
    hasAllowed,
    setHasAllowed,
  } = UseSanitaryProtocolsHook({ policy });
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Protocolos Sanitários"
        isEditing={edit}
        handle={() => {
          if (edit) submit();
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <p>
          Use esse espaço para informar as práticas e protocolos de saúde,
          segurança e higiene que seu estabelecimento adota.
        </p>
        <LanguageTabs
          value={languageRules}
          set={setLanguageRules}
        />
        <div className="flex gap-4">
          <Toggler
            disabled={!edit}
            enabled={hasAllowed}
            setEnabled={() => {
              setHasAllowed(!hasAllowed);
            }}
          />
          <p>
            Aderiu ao programa de Turismo Responsável do Ministério do Turismo?
          </p>
        </div>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
