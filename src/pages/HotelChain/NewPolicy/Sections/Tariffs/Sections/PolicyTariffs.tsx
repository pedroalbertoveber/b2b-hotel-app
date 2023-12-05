import { B2BPattern } from '@/components'
import { useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle'

export default function PolicyTariffs() {
  const [edit, setEdit] = useState(false)
  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        disabled
        title="Tarifas que Utilizam essa Política"
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
        <></>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
