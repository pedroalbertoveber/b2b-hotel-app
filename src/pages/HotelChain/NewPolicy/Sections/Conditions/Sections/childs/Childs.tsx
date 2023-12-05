import { B2BPattern } from '@/components'
import UseChildHook from './hooks/UseChildHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'
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
  } = UseChildHook({ policy })

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Crianças"
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
                checked={allowChild}
                onCheckedChange={() => {
                  setAllowChild(!allowChild)
                }}
              />
            </FormComponents.Switch.Root>
            <p>Permite Crianças</p>
          </div>
          {allowChild && (
            <div className="ml-4 flex w-full flex-col gap-4">
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Idade Limite</label>
                <FormComponents.Input
                  disabled={!edit}
                  value={childUntilAge}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setChildUntilAge(+event.target.value)
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
                checked={courtesyChild}
                onCheckedChange={() => {
                  setCourtesyChild(!courtesyChild)
                }}
              />
            </FormComponents.Switch.Root>
            <p>Cortesias</p>
          </div>
          {courtesyChild && (
            <div className="ml-4 flex w-full flex-col gap-4">
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Qtde Cortesias</label>
                <FormComponents.Input
                  disabled={!edit}
                  value={howManyChilds}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setHowManyChilds(+event.target.value)
                  }}
                />
              </div>
              <div className="grid grid-cols-2">
                <label className="w-full self-center">Idade Limite</label>
                <FormComponents.Input
                  disabled={!edit}
                  value={childUntilAgeForCortesy}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setChildUntilAgeForCortesy(+event.target.value)
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* <LanguageTabs value={languageRules} set={setLanguageRules} /> */}
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
