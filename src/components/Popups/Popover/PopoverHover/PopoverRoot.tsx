import { Popover } from '@/components/ui/popover'
import React from 'react'

export default function PopoverRoot({
  children,
  open,
}: {
  children: React.ReactNode
  open: boolean
}) {
  return <Popover open={open}>{children}</Popover>
}
