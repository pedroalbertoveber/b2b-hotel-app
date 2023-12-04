import { B2BPattern } from '@/components'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import SectionModal from './Modal/SectionModal'
import { useUsersHomeEntityContext } from '@/context/UsersHomeEntityContext'
import OtherContact from './components/OtherContact'
import { Contact } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'

export default function AditionalContact() {
  const {
    UsersHome: {
      hook: { hotelsChain },
    },
  } = useUsersHomeEntityContext()

  const { contacts } = hotelsChain

  const [open, setOpen] = useState(false)

  const [index, setIndex] = useState<number | null>(0)

  const handleChangeIndex = (index: number) => {
    setIndex(index)
    setTimeout(() => {
      setOpen(true)
    }, 100)
  }
  return (
    <>
      <B2BPattern.Containers.Whitebox className="gap-2 lg:gap-4">
        <div className="mb-8 flex w-full justify-between">
          <B2BPattern.Texts.Subtitle
            title="Contatos Adicionais"
            classes="text-[1rem] uppercase font-[600]"
          />
        </div>

        <div className="flex flex-col gap-8">
          {contacts.map((contact: Contact, index: number) => (
            <OtherContact
              key={`other_contact_${contact.alphaId}`}
              contact={contact}
              setOpen={setOpen}
              handleChangeIndex={() => {
                handleChangeIndex(index)
              }}
            />
          ))}
        </div>

        <button
          type="button"
          className="mt-6 flex cursor-pointer items-center justify-center gap-4 rounded-full border-2 px-6 py-2"
          onClick={() => {
            setIndex(null)
            setOpen(true)
          }}
        >
          <FaPlus className="text-primary" />
          <p className="text-small">Adicionar contato</p>
        </button>
      </B2BPattern.Containers.Whitebox>

      <SectionModal open={open} setOpen={setOpen} index={index} />
    </>
  )
}
