import { B2BPattern } from '@/components'
import UseSanitaryProtocolsHook from './hooks/UseSanitaryProtocolsHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'

export default function SanitaryProtocols({ policy }: { policy: any }) {
  const {
    languageRules,
    setLanguageRules,
    edit,
    setEdit,
    submit,
    hasAllowed,
    setHasAllowed,
  } = UseSanitaryProtocolsHook({ policy })
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Protocolos Sanitários"
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
        <p>
          Use esse espaço para informar as práticas e protocolos de saúde,
          segurança e higiene que seu estabelecimento adota.
        </p>
        {/* <LanguageTabs value={languageRules} set={setLanguageRules} /> */}
        <div className="flex gap-4">
          <FormComponents.Switch.Root>
            <FormComponents.Switch.Thumb
              disabled={!edit}
              checked={hasAllowed}
              onCheckedChange={() => {
                setHasAllowed(!hasAllowed)
              }}
            />
          </FormComponents.Switch.Root>
          <p>
            Aderiu ao programa de Turismo Responsável do Ministério do Turismo?
          </p>
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
