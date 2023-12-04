// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { SectionModal } from './Modal/SectionModal'
import BasicInfo from '../../Components/BasicInfo'
import { Tooltip } from '@/components/Utils/Tooltip'
import { FormComponents } from '@/components/FormComponents'

// Icons
import { Attachment, Pencil } from '@/common/icons'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'

export default function Legal() {
  const {
    UsersHome: {
      hook: {
        hotelsChain: { responsible },
      },
    },
  } = useUsersHomeEntityContext()
  const [open, setOpen] = useState(false)

  function handleOpenModal() {
    setOpen(true)
  }

  return (
    <>
      <B2BPattern.Containers.Whitebox className="gap-2 lg:gap-4">
        <div className="mb-2 flex w-full justify-between">
          <B2BPattern.Texts.Subtitle
            title="Informações Legais"
            classes="text-[1rem] uppercase font-[600]"
          />

          <Tooltip description="Editar">
            <FormComponents.Button
              variant="ghost-primary"
              onClick={handleOpenModal}
              type="button"
            >
              <Pencil />
            </FormComponents.Button>
          </Tooltip>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <BasicInfo
            info="Responsável"
            value={responsible ? responsible.fullName : 'Bruce Wayne'}
          />

          <BasicInfo
            info="Cargo"
            value={responsible ? responsible.role : 'Filantrópo'}
          />

          <BasicInfo
            info="CPF"
            value={responsible ? responsible.taxPayerCode : '034.239.810-59'}
          />

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex w-auto items-center gap-2 rounded-full border-2 border-divider/20 px-4 py-2">
                <Attachment />

                <span className="text-small">Anexar contrato B2B</span>
              </div>

              <small className="text-xs text-gray-300">
                O contrato com a B2B é regido pela rede hoteleira.
              </small>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex w-auto items-center gap-2 rounded-full border-2 border-divider/20 px-4 py-2">
                <Attachment />

                <span className="text-small">Anexar contrato social</span>
              </div>

              <small className="text-xs text-gray-300">
                O contrato com a B2B é regido pela rede hoteleira.
              </small>
            </div>
          </div>
        </div>
      </B2BPattern.Containers.Whitebox>

      <SectionModal open={open} setOpen={setOpen} />
    </>
  )
}
