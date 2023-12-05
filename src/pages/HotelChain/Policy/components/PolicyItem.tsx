import { FaEllipsisVertical, FaStar } from 'react-icons/fa6'
import { BiSolidHelpCircle } from 'react-icons/bi'
import { PopoverHover } from '@/components/Popups/Popover/PopoverHover'
import { useState } from 'react'
import { PopoverClick } from '@/components/Popups/Popover/PopoverClick'
import PolicyEdit from './PolicyEdit'

export default function PolicyItem({ policy }: { policy: any }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex w-full cursor-pointer justify-between">
      <div className="flex items-center justify-start gap-2">
        <p className="uppercase">{policy.name}</p>

        <PopoverHover.PopoverRoot open={open}>
          <PopoverHover.PopoverTrigger
            mouseEnter={() => {
              console.log('enter')
              setOpen(true)
            }}
            mouseLeave={() => setOpen(false)}
          >
            <BiSolidHelpCircle className="h-6 w-6 text-white" />
          </PopoverHover.PopoverTrigger>
          <PopoverHover.PopoverContent>
            <div className="z-10 w-[20rem] rounded-b2b p-2">
              <p className="z-20 text-primary">{policy.description.PT_BR}</p>
            </div>
          </PopoverHover.PopoverContent>
        </PopoverHover.PopoverRoot>

        <FaStar className={policy.defaultPolicy ? 'text-yellow-400' : ''} />
      </div>
      <div className="flex items-center justify-end">
        <PopoverClick.PopoverRoot>
          <PopoverClick.PopoverTrigger>
            <button type="button">
              <FaEllipsisVertical className="h-4" />
            </button>
          </PopoverClick.PopoverTrigger>
          <PopoverClick.PopoverContent>
            <PolicyEdit policy={policy} />
          </PopoverClick.PopoverContent>
        </PopoverClick.PopoverRoot>
      </div>
    </div>
  )
}
