import SectionTitle from '@/app/(dashboard)/profile/policy/components/SectionTitle';
import { B2BPattern } from '@/components/pattern';
import Input from '@/components/formComponents/Input';
import UseBuyWindowHook from './hooks/UseBuyWindowHook';

export default function BuyWindow({ policy }: { policy: any }) {
  const { days, min, max, edit, setEdit, setMin, setMax, submit } =
    UseBuyWindowHook({
      policy,
    });
  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Períodos Mínimos e Máximos de Estadia"
        isEditing={edit}
        handle={() => {
          if (edit) submit();
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column
        classes={`${
          !edit ? 'opacity-75' : ''
        } justify-center items-start gap-4`}
      >
        <B2BPattern.Containers.Row classes="justify-between gap-4">
          <div className="flex flex-col gap-4">
            <p>Estádia mínima (dias)</p>
            <div className="flex flex-col gap-4">
              {days.map((e: any, i: number) => {
                return (
                  <Input
                    disabled={!edit}
                    type="number"
                    key={i}
                    title={e.title}
                    value={min[i]}
                    onChange={(e: any) => {
                      const value = e.target.value;
                      setMin((prev: any) => {
                        prev[i] = value;
                        return [...prev];
                      });
                    }}
                    row={true}
                    className="w-1/3"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Estádia Máxima (dias)</p>
            <div className="flex flex-col gap-4">
              {days.map((e: any, i: number) => {
                return (
                  <Input
                    disabled={!edit}
                    type="number"
                    key={i}
                    title={e.title}
                    value={max[i]}
                    onChange={(e: any) => {
                      const value = e.target.value;
                      setMax((prev: any) => {
                        prev[i] = value;
                        return [...prev];
                      });
                    }}
                    row={true}
                    className="w-1/3"
                  />
                );
              })}
            </div>
          </div>
        </B2BPattern.Containers.Row>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
