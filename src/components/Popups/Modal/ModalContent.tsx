import { DialogContent } from '@/components/ui/dialog'
import React from 'react'

export default function ModalContent({
  children,
}: {
  children: React.ReactNode
}) {
  return <DialogContent>{children}</DialogContent>
}
