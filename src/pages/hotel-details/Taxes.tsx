// Components
import { Container } from '@/components/Container'
import { Tooltip } from '@/components/Tooltip'

// Icons
import { Pencil } from '@/common/icons'

export function Taxes() {
  return (
    <Container className="space-y-6">
      <div className="flex w-full items-center justify-between">
        <span className="sub-title">Taxas</span>

        <Tooltip description="Editar">
          <Pencil />
        </Tooltip>
      </div>

      <div className="w-full space-y-4">
        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Taxa de Serviço</span>
          <span className="text-gray-600">10%</span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Taxa de Turismo</span>
          <span className="text-gray-600">R$ 100,00</span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">ISS</span>
          <span className="text-gray-600">5%</span>
        </div>
      </div>
    </Container>
  )
}
