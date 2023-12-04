import { B2BPattern } from '@/components'
import { useState } from 'react'
import { FaPencil } from 'react-icons/fa6'
import SectionModal from './Modal/SectionModal'
import BasicInfo from '../../Components/BasicInfo'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'

export default function MainContact() {
  const {
    UsersHome: {
      hook: { hotelsChain },
    },
  } = useUsersHomeEntityContext()
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
            info="Telefone"
            value={hotelsChain ? hotelsChain.phone : ''}
          />
          <BasicInfo
            info="E-mail"
            value={hotelsChain ? hotelsChain.mail : ''}
          />
          <BasicInfo
            info="Endereço"
            value={
              hotelsChain
                ? hotelsChain.address.addressLine.toLowerCase() +
                  ', ' +
                  hotelsChain.address.district.toLowerCase() +
                  ' - ' +
                  hotelsChain.address.zipCode +
                  ' ' +
                  hotelsChain.address.location.cityName.toLowerCase() +
                  '/' +
                  hotelsChain.address.location.stateSymbol.toLowerCase() +
                  ' - ' +
                  hotelsChain.address.location.countryName.toLowerCase()
                : ''
            }
          />
        </div>
      </B2BPattern.Containers.Whitebox>

      <SectionModal open={open} setOpen={setOpen} />
    </>
  )
}
