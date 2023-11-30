// Components
import { Container } from '@/components/core/Container'
import { Tooltip } from '@/components/core/Tooltip'

// Icons
import { Pencil, Attachment } from '@/common/icons'

export function Legal() {
  return (
    <Container className="space-y-6">
      <div className="flex w-full items-center justify-between">
        <span className="sub-title">Informações legais</span>

        <Tooltip description="Editar">
          <Pencil />
        </Tooltip>
      </div>

      <div className="w-full space-y-4">
        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Responsável</span>
          <span className="text-gray-600">Bruce Wayne</span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">Cargo</span>
          <span className="text-gray-600">Diretor Executivo</span>
        </div>

        <div className="grid grid-cols-[150px_1fr]">
          <span className="text-black">CPF</span>
          <span className="text-gray-600">000.000.000-00</span>
        </div>

        <div className="flex flex-col items-start gap-2">
          <div className="flex w-auto  items-center gap-2 rounded-full border-2 border-divider/20 px-4 py-2">
            <Attachment />
            <span className="text-black">Contrato social</span>
          </div>

          <span className="text-gray-300">
            O contrato com a B2B é regido pela rede hoteleira.
          </span>
        </div>
      </div>
    </Container>
  )
}
