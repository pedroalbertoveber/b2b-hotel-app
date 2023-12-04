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
      <DialogTitle className="font-[400]">{title}</DialogTitle>
      {description && <DialogDescription>{description}</DialogDescription>}
    </DialogHeader>
  )
}
