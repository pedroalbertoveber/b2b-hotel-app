import { B2BPattern } from '@/components/pattern';
import SectionTitle from '../../../../../components/SectionTitle';
import Toggler from '@/components/interactionComponents/switch/Switch';
import { TaxesInterface } from './interface/type';
import PaymentType from './components/PaymentType';
import UseTaxesHook from './hook/UseTaxesHook';

// TODO Entender regra de negócio para poder aplicar
export default function Taxes({ policy }: { policy: any }) {
  const { edit, setEdit, enabled, setEnabled, taxesData } = UseTaxesHook();

  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Taxas"
        isEditing={edit}
        handle={() => {
          setEdit(!edit);
        }}
      />

      <B2BPattern.Containers.Column>
        <div className="flex flex-col items-center gap-8 w-full">
          {taxesData.map((e: TaxesInterface, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center w-full gap-4"
              >
                <div className="flex w-full">
                  <Toggler
                    disabled={!edit}
                    enabled={enabled[i]}
                    setEnabled={() => {
                      const aux = [...enabled];
                      aux[i] = !aux[i];
                      setEnabled(aux);
                    }}
                  />
                </div>
                <div className="flex w-full">
                  <p className="break-all font-semibold">{e.title}</p>
                </div>
                <div className="flex w-full">
                  <PaymentType
                    tax={e}
                    disabled={!edit}
                  />
                </div>
                <div className="flex w-full">
                  <input
                    disabled={!edit}
                    className="w-full border-b pb-1"
                    placeholder="Valor"
                    type="text"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </B2BPattern.Containers.Column>
    </B2BPattern.Containers.WhiteBox>
  );
}
