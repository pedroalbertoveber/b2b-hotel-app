import { flagsList } from '@/assets/flags'
import { FormComponents } from '@/components/FormComponents'

export default function CardDetails({
  cardOnlyPhysical,
  setCardOnlyPhysical,
  creditCards,
  setCreditCards,
  disabled = false,
}: {
  cardOnlyPhysical: boolean
  setCardOnlyPhysical: any
  creditCards: any
  setCreditCards: any
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <FormComponents.Switch.Root>
            <FormComponents.Switch.Thumb
              checked={!cardOnlyPhysical}
              disabled={disabled}
              onCheckedChange={() => {
                setCardOnlyPhysical(false)
              }}
            />
          </FormComponents.Switch.Root>
          <p>Físico e Virtual</p>
        </div>
        <div className="flex gap-4">
          <FormComponents.Switch.Root>
            <FormComponents.Switch.Thumb
              checked={cardOnlyPhysical}
              disabled={disabled}
              onCheckedChange={() => {
                setCardOnlyPhysical(true)
              }}
            />
          </FormComponents.Switch.Root>
          <p>Somente Físico</p>
        </div>
      </div>
      <div className="ml-4 flex gap-2">
        {flagsList.map((e) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-1"
              key={e.name}
            >
              <img src={e.img} alt={e.name} className="h-5 w-5" />
              <FormComponents.Checkbox.Root>
                <FormComponents.Checkbox.Trigger
                  checked={creditCards.includes(e.name)}
                  disabled={disabled}
                  onCheckedChange={() => {
                    const aux = [...creditCards]
                    if (aux.includes(e.name)) {
                      aux.splice(aux.indexOf(e.name), 1)
                    } else {
                      aux.push(e.name)
                    }
                    setCreditCards(aux)
                  }}
                  value={e.name}
                />
              </FormComponents.Checkbox.Root>
            </div>
          )
        })}
      </div>
    </div>
  )
}
