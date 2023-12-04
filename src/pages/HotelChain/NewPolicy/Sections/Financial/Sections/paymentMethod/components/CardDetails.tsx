import Toggler from '@/components/interactionComponents/switch/Switch';
import { flagsList } from '@/assets/imgs/flags';
import Image from 'next/image';
import RadioSingle from '@/components/interactionComponents/radio/RadioSingle';

export default function CardDetails({
  cardOnlyPhysical,
  setCardOnlyPhysical,
  creditCards,
  setCreditCards,
  disabled = false,
}: {
  cardOnlyPhysical: boolean;
  setCardOnlyPhysical: any;
  creditCards: any;
  setCreditCards: any;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Toggler
            enabled={!cardOnlyPhysical}
            disabled={disabled}
            setEnabled={() => {
              setCardOnlyPhysical(false);
            }}
          />
          <p>Físico e Virtual</p>
        </div>
        <div className="flex gap-4">
          <Toggler
            enabled={cardOnlyPhysical}
            disabled={disabled}
            setEnabled={() => {
              setCardOnlyPhysical(true);
            }}
          />
          <p>Somente Físico</p>
        </div>
      </div>
      <div className="flex gap-2 ml-4">
        {flagsList.map((e, i) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-1"
              key={e.name}
            >
              <Image
                src={e.img}
                alt={e.name}
                className="w-5 h-5"
                quality={100}
                priority
              />
              <RadioSingle
                checked={creditCards.includes(e.name)}
                disabled={disabled}
                handleChange={() => {
                  const aux = [...creditCards];
                  if (aux.includes(e.name)) {
                    aux.splice(aux.indexOf(e.name), 1);
                  } else {
                    aux.push(e.name);
                  }
                  setCreditCards(aux);
                }}
                selectedValue={e.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
