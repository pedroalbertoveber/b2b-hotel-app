import { DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

export default function ModalTrigger({
  children,
}: {
  children: React.ReactNode
}) {
  return <DialogTrigger>{children}</DialogTrigger>
}
