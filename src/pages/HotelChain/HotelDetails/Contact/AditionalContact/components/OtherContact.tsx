'use client'

import { Contact } from '@/entities/HotelChainEntity/@types/HotelChainEntityTypes'
import { useState } from 'react'
import {
  FaChevronDown,
  FaChevronUp,
  FaLocationDot,
  FaPencil,
  FaTrashCan,
} from 'react-icons/fa6'
import BasicInfo from '../../../Components/BasicInfo'

export default function OtherContact({
  contact,
  setOpen,
  handleChangeIndex,
}: {
  contact: Contact
  setOpen: (value: boolean) => void
  handleChangeIndex: () => void
}) {
  const [openInfo, setOpenInfo] = useState(false)
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between border-b pb-2">
        <div className="flex items-center gap-2">
          <FaLocationDot className="h-4 w-4 text-primary" />
          <p className="font-bold capitalize">{contact.type}</p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => {
              handleChangeIndex()
            }}
          >
            <FaPencil className="text-primary" />
          </button>
          <button type="button" onClick={() => {}}>
            <FaTrashCan className="text-secondary" />
          </button>
          <button
            type="button"
            onClick={() => {
              setOpenInfo(!openInfo)
            }}
          >
            {openInfo ? (
              <FaChevronUp className="text-textSecondary font-bold" />
            ) : (
              <FaChevronDown className="text-textSecondary font-bold" />
            )}
          </button>
        </div>
      </div>
      {openInfo && (
        <div className="flex flex-col items-start gap-2">
          <BasicInfo info="Nome" value={contact.name} />
          <BasicInfo info="Telefone" value={contact.phone} />
          <BasicInfo info="E-mail" value={contact.mail} />
        </div>
      )}
    </div>
  )
}
