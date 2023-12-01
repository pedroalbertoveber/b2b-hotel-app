import { PopoverContent as Content } from '@/components/ui/popover'
import React from 'react'

export default function PopoverContent({
  children,
}: {
  children: React.ReactNode
}) {
  return <Content>{children}</Content>
}
