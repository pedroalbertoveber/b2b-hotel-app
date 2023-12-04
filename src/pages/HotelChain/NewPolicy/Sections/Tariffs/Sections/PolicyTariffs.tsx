import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import { B2BPattern } from '@/components/pattern';
import { useState } from 'react';

export default function PolicyTariffs() {
  const [edit, setEdit] = useState(false);
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        disabled
        title="Tarifas que Utilizam essa Política"
        isEditing={edit}
        handle={() => {
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <></>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
