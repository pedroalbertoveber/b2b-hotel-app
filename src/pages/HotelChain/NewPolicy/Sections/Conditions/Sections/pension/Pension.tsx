import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import AutoCompleteB2B from '@/components/formComponents/AutoComplete';
import { B2BPattern } from '@/components/pattern';
import { pensionOptions } from '@/globalData/pensionType';
import UsePensionHook from './hook/UsePensionHook';

export default function Pension({ policy }: { policy: any }) {
  const { pension, setPension, edit, setEdit, submit } = UsePensionHook({
    policy,
  });
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Pensões"
        isEditing={edit}
        handle={() => {
          if (edit) submit();
          setEdit(!edit);
        }}
      />
      <B2BPattern.Containers.Column
        classes={`${!edit ? 'opacity-75' : ''} justify-start items-start gap-4`}
      >
        <div className="flex flex-col">
          <p>Que tipo de Pensão está inclusa nessa tarifa?</p>
        </div>
        <div className="w-full">
          <AutoCompleteB2B
            disabled={!edit}
            options={pensionOptions}
            value={pension}
            onChange={(e: any) => {
              setPension(e);
            }}
          />
        </div>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
