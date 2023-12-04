import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import { B2BPattern } from '@/components/pattern';
import { TextField } from '@mui/material';
import UseHoursHook from './hook/UseHoursHook';
import TextFieldB2b from '@/components/formComponents/TextField';

export default function Hours({ policy }: { policy: any }) {
  const {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    edit,
    setEdit,
    handleSubmit,
  } = UseHoursHook({ policy });

  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Horários"
        isEditing={edit}
        handle={() => {
          if (edit) handleSubmit();
          setEdit(!edit);
        }}
      />
      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <div className="grid grid-cols-2">
          <label className="w-full self-center">Check-in a partir de</label>
          <TextFieldB2b
            disabled={!edit}
            value={checkIn}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckIn(event.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-2">
          <label className="w-full self-center">Check-out até</label>
          <TextFieldB2b
            disabled={!edit}
            value={checkOut}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckOut(event.target.value);
            }}
          />
        </div>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
