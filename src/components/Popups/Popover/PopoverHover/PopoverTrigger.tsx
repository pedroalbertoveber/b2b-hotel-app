import { PopoverTrigger as Trigger } from '@/components/ui/popover'
import React from 'react'

export default function PopoverTrigger({
  children,
  mouseEnter,
  mouseLeave,
}: {
  children: React.ReactNode
  mouseEnter: () => void
  mouseLeave: () => void
}) {
  return (
    <Trigger onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {children}
    </Trigger>
  )
}
