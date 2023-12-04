import Toggler from '@/components/interactionComponents/switch/Switch';
import { B2BPattern } from '@/components/pattern';
import SectionTitle from '../../../../../components/SectionTitle';
import CardDetails from './components/CardDetails';
import UsePaymentMethodHook from './hook/usePaymentMethod';
import SectionSubtitle from '@/app/(dashboard)/profile/policy/components/SectionSubtitle';

export default function PaymentMethods({ policy }: { policy: any }) {
  const {
    edit,
    setEdit,
    enabled,
    setEnabled,
    cardOnlyPhysical,
    setCardOnlyPhysical,
    creditCards,
    setCreditCards,
    findPaymentMethods,
    handleSubmit,
    paymentMethodsDefault,
  } = UsePaymentMethodHook({ policy });

  findPaymentMethods();

  return (
    <B2BPattern.Containers.WhiteBox>
      <SectionTitle
        title="Formas de Pagamento"
        isEditing={edit}
        handle={() => {
          if (edit) {
            handleSubmit();
          }
          setEdit(!edit);
        }}
      />
      <div className="flex flex-col justify-start w-full items-start gap-4">
        <SectionSubtitle title="Formas de Pagamento Aceitas" />
        {paymentMethodsDefault.map((e, i) => {
          return (
            <div
              className="flex flex-col gap-8"
              key={e.id}
            >
              <div className="flex gap-4">
                <Toggler
                  disabled={!edit}
                  enabled={enabled[i]}
                  setEnabled={() => {
                    const aux = [...enabled];
                    aux[i] = !aux[i];
                    setEnabled(aux);
                  }}
                />
                <p>{e.title}</p>
              </div>
              {e.name === 'CREDIT_CARD' && enabled[i] && (
                <div className="flex flex-col gap-4 ml-8 mb-4">
                  <CardDetails
                    cardOnlyPhysical={cardOnlyPhysical}
                    setCardOnlyPhysical={setCardOnlyPhysical}
                    creditCards={creditCards}
                    setCreditCards={setCreditCards}
                    disabled={!edit}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </B2BPattern.Containers.WhiteBox>
  );
}
