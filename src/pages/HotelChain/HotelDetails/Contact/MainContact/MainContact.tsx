import { B2BPattern } from '@/components'
import { useState } from 'react'
import { FaPencil } from 'react-icons/fa6'
import SectionModal from './Modal/SectionModal'
import BasicInfo from '../../Components/BasicInfo'

export default function MainContact({ data }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <B2BPattern.Containers.Whitebox className="gap-2 lg:gap-4">
        <div className="mb-2 flex w-full justify-between">
          <B2BPattern.Texts.Subtitle
            title="Contato Principal"
            classes="text-[1rem] uppercase font-[600]"
          />
          <button
            onClick={() => {
              setOpen(true)
            }}
            type="button"
          >
            <FaPencil />
          </button>
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
