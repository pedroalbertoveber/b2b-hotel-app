import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type ModalHeaderProps = {
  title: string
  description?: string
}

export default function ModalHeader({ title, description }: ModalHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      {description && <DialogDescription>{description}</DialogDescription>}
    </DialogHeader>
  )
}
