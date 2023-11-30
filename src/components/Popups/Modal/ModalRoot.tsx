import { Dialog } from '@/components/ui/dialog'

export default function ModalRoot({ children }: { children: React.ReactNode }) {
  return <Dialog>{children}</Dialog>
}
