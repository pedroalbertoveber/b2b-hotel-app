// Core
import { useState } from 'react'

// Components
import { B2BPattern } from '@/components'
import { Tooltip } from '@/components/Utils/Tooltip'
import { FormComponents } from '@/components/FormComponents'

import { SectionModal } from './Modal/SectionModal'

// // Icons
import { Pencil } from '@/common/icons'

// Mocks
import { AMENTITIES } from '@/common/mocks/amentities'

export default function Comodities({ data }) {
  const [open, setOpen] = useState(false)

  function handleOpenModal() {
    setOpen(true)
  }

  return (
    <>
      <B2BPattern.Containers.Whitebox className="gap-2 lg:gap-4">
        <div className="mb-2 flex w-full justify-between">
          <B2BPattern.Texts.Subtitle
            title="Comodidades"
            classes="text-base uppercase font-semibold"
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

        <div className="grid w-full grid-cols-8 gap-6 pr-20">
          {AMENTITIES.slice(0, 16).map(({ name, icon: Icon }) => {
            return (
              <Tooltip key={name} description={name}>
                <Icon />
              </Tooltip>
            )
          })}
        </div>
      </B2BPattern.Containers.Whitebox>

      <SectionModal open={open} setOpen={setOpen} data={data || []} />
    </>
  )
}
