import { B2BPattern } from '@/components'
import UseHoursHook from './hook/UseHoursHook'
import SectionTitle from '@/pages/HotelChain/NewPolicy/Components/SectionTitle'
import { FormComponents } from '@/components/FormComponents'

export default function Hours({ policy }: { policy: any }) {
  const {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    edit,
    setEdit,
    handleSubmit,
  } = UseHoursHook({ policy })

  return (
    <B2BPattern.Containers.Whitebox>
      <SectionTitle
        title="Horários"
        isEditing={edit}
        handle={() => {
          if (edit) handleSubmit()
          setEdit(!edit)
        }}
      />
      <div
        className={`flex w-full flex-col items-start justify-start gap-8 ${
          !edit ? 'opacity-75' : ''
        }`}
      >
        <div className="grid grid-cols-2">
          <label className="w-full self-center">Check-in a partir de</label>
          <FormComponents.Input
            disabled={!edit}
            value={checkIn}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckIn(event.target.value)
            }}
          />
        </div>
        <div className="grid grid-cols-2">
          <label className="w-full self-center">Check-out até</label>
          <FormComponents.Input
            disabled={!edit}
            value={checkOut}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckOut(event.target.value)
            }}
          />
        </div>
      </div>
    </B2BPattern.Containers.Whitebox>
  )
}
