// Core
import { useEffect, useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import BasicInfo from '../../Components/BasicInfo'
import { FormComponents } from '@/components/FormComponents'

// Modal
import SectionModal from './Modal/SectionModal'

// Icons
import { Pencil } from '@/common/icons'
import { Tooltip } from '@/components/Utils/Tooltip'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'

export default function General() {
  const {
    UsersHome: {
      hook: { hotelsChain },
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
            title="Informações Gerais"
            classes="text-[1rem] uppercase font-[600]"
          />
          <Tooltip description="Editar">
            <FormComponents.Button
              onClick={handleOpenModal}
              type="button"
              variant="ghost-primary"
            >
              <Pencil />
            </FormComponents.Button>
          </Tooltip>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <BasicInfo
            info="Razão Social"
            value={hotelsChain ? hotelsChain.corporateName : ''}
          />
          <BasicInfo
            info="CNPJ"
            value={hotelsChain ? hotelsChain.taxpayerId : ''}
          />
          <BasicInfo
            info="Inscrição Estadual"
            value={
              hotelsChain
                ? hotelsChain.exemptedStateCompanyRegNumber
                  ? 'Isento'
                  : hotelsChain.stateCompanyRegNumber
                : ''
            }
          />
        </div>
      </B2BPattern.Containers.Whitebox>

      <SectionModal open={open} setOpen={setOpen} />
    </>
  )
}
