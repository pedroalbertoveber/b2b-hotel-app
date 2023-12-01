import { Popover } from '@/components/ui/popover'
import React from 'react'

export default function PopoverRoot({
  children,
}: {
  children: React.ReactNode
}) {
  return <Popover>{children}</Popover>
}
