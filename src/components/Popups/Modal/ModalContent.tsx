// Core
import React from 'react'

// Components
import { DialogContent } from '@/components/ui/dialog'

export default function ModalContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <DialogContent className={className}>{children}</DialogContent>
}
