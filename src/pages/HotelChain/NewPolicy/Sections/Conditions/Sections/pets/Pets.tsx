import { B2BPattern } from '@/components'
import UsePetsHook from './hooks/UsePetsHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'

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
  })

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Pets"
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
        <div className="flex gap-4">
          <FormComponents.Switch.Root>
            <FormComponents.Switch.Thumb
              disabled={!edit}
              checked={allowPets}
              onChange={() => {
                setAllowPets(!allowPets)
              }}
            />
          </FormComponents.Switch.Root>
          <p>Permite Pets</p>
        </div>
        {/* {allowPets && (
          <LanguageTabs value={languageRules} set={setLanguageRules} />
        )} */}
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
