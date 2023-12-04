// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import BasicInfo from '../../Components/BasicInfo'
import { FormComponents } from '@/components/FormComponents'

// Modal
import SectionModal from './Modal/SectionModal'

// Icons
import { Pencil } from '@/common/icons'
import { Tooltip } from '@/components/Utils/Tooltip'

export default function General({ data }) {
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
            value={data ? data.corporateName : ''}
          />
          <BasicInfo info="CNPJ" value={data ? data.taxpayerId : ''} />
          <BasicInfo
            info="Inscrição Estadual"
            value={
              data
                ? data.exemptedStateCompanyRegNumber
                  ? 'Isento'
                  : data.stateCompanyRegNumber
                : ''
            }
          />
        </div>
      </B2BPattern.Containers.Whitebox>

      <SectionModal open={open} setOpen={setOpen} data={data || []} />
    </>
  )
}
