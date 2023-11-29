// Components
import { Container } from '@/components/Container'
import { Tooltip } from '@/components/Tooltip'

// Icons
import { Pencil } from '@/common/icons'

export function General() {
  return (
    <Container className="space-y-6">
      <div className="flex w-full items-center justify-between">
        <span className="sub-title">Informações gerais</span>

        <Tooltip description="Editar">
          <Pencil />
        </Tooltip>
      </div>

      <div className="w-full space-y-4">
        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Razão Social</span>
          <span className="text-gray-600">
            Disney Rede de Hotéis SADisney Rede de Hotéis SADisney Rede de
            Hotéis SADisney Rede
          </span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">CNPJ</span>
          <span className="text-gray-600">00.000.000/0000-00</span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Inscrição Estadual</span>
          <span className="text-gray-600">Isento</span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Tipo</span>
          <span className="text-gray-600">Hotel</span>
        </div>
      </div>
    </Container>
  )
}
