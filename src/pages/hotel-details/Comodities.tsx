// Components
import { Container } from '@/components/Container'
import { Tooltip } from '@/components/Tooltip'

// Icons
import {
  Pencil,
  Gym,
  Parking,
  GolfField,
  WheelChair,
  Playground,
  Television,
  Breakfeast,
  SmokeAllowed,
  ExpressCheckIn,
} from '@/common/icons'

export function Comodities() {
  return (
    <Container className="space-y-6">
      <div className="flex w-full items-center justify-between">
        <span className="sub-title">Comididades</span>

        <Tooltip description="Editar">
          <Pencil />
        </Tooltip>
      </div>

      <div className="grid w-full grid-cols-8 gap-6 pr-20">
        <Tooltip description="Academia">
          <Gym />
        </Tooltip>

        <Tooltip description="Estacionamento">
          <Parking />
        </Tooltip>

        <Tooltip description="Campo de Golf">
          <GolfField />
        </Tooltip>

        <Tooltip description="Playground">
          <Playground />
        </Tooltip>

        <Tooltip description="Acesso para cadeirantes">
          <WheelChair />
        </Tooltip>

        <Tooltip description="Televisão">
          <Television />
        </Tooltip>

        <Tooltip description="Café da manhã">
          <Breakfeast />
        </Tooltip>

        <Tooltip description="Fumódromo">
          <SmokeAllowed />
        </Tooltip>

        <Tooltip description="Check-in Expresso">
          <ExpressCheckIn />
        </Tooltip>
      </div>
    </Container>
  )
}
