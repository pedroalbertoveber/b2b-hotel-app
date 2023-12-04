import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import Toggler from '@/components/interactionComponents/switch/Switch';
import { B2BPattern } from '@/components/pattern';
import { useState } from 'react';

export default function Guarantee({ policy }: { policy: any }) {
  const [hasGuarantee, setHasGuarantee] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Garantias"
        disabled
        isEditing={edit}
        handle={() => {
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <div className="flex gap-4">
          <Toggler
            disabled={!edit}
            enabled={hasGuarantee}
            setEnabled={() => {
              setHasGuarantee(!hasGuarantee);
            }}
          />
          <p>Esta tarifa exige garantia em caso de no-show</p>
        </div>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
