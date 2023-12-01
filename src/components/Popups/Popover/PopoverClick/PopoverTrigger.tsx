import { PopoverTrigger as Trigger } from '@/components/ui/popover'
import React from 'react'

export default function PopoverTrigger({
  children,
}: {
  children: React.ReactNode
}) {
  return <Trigger asChild>{children}</Trigger>
}
