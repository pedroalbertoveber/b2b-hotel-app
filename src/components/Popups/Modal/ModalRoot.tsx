import { Dialog } from '@/components/ui/dialog'
import { DialogProps } from '@radix-ui/react-dialog'

export default function ModalRoot(props: DialogProps) {
  return <Dialog {...props} />
}
