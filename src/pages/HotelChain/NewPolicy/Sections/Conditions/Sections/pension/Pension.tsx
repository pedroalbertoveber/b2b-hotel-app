import { B2BPattern } from '@/components'
import UsePensionHook from './hook/UsePensionHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'

export default function Pension({ policy }: { policy: any }) {
  const { pension, setPension, edit, setEdit, submit } = UsePensionHook({
    policy,
  })
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Pensões"
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
        <div className="flex flex-col">
          <p>Que tipo de Pensão está inclusa nessa tarifa?</p>
        </div>
        <div className="w-full">
          {/* <AutoCompleteB2B
            disabled={!edit}
            options={pensionOptions}
            value={pension}
            onChange={(e: any) => {
              setPension(e)
            }}
          /> */}
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
