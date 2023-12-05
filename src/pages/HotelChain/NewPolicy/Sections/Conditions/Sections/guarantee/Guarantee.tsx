import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { useState } from 'react'

export default function Guarantee({ policy }: { policy: any }) {
  const [hasGuarantee, setHasGuarantee] = useState(false)
  const [edit, setEdit] = useState(false)
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Garantias"
        disabled
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
        <div className="flex gap-4">
          <FormComponents.Switch.Root>
            <FormComponents.Switch.Thumb
              disabled={!edit}
              checked={hasGuarantee}
              onCheckedChange={() => {
                setHasGuarantee(!hasGuarantee)
              }}
            />
          </FormComponents.Switch.Root>
          <p>Esta tarifa exige garantia em caso de no-show</p>
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
