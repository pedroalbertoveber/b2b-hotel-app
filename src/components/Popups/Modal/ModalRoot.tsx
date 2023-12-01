import { Dialog } from '@/components/ui/dialog'

export default function ModalRoot({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
    </Dialog>
  )
}
