// Core
import type { ReactNode } from 'react'

// Libs
import * as RadixTooltip from '@radix-ui/react-tooltip'

type TooltipProps = RadixTooltip.TooltipTriggerProps & {
  children: ReactNode
  description: string
}

export function Tooltip({ children, description, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger {...props}>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={4}
            className="rounded-[4px] bg-background-tooltip px-2 py-1 text-white"
          >
            {description}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
