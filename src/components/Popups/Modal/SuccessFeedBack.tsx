import { B2BPattern } from '@/components'
import { FormComponents } from '@/components/FormComponents'
import { LuCheck } from 'react-icons/lu'

export default function SuccessFeedBack({
  handleCloseDialog,
}: {
  handleCloseDialog: () => void
}) {
  return (
    <B2BPattern.Popups.Modal.Content className="p-0">
      <div className="flex items-center gap-4 p-6">
        <LuCheck className="text-success" size={24} />
        <span className="text-title-sm font-semibold text-primary">
          Alterações salvas com sucesso!
        </span>
      </div>
      <footer className="flex w-full justify-end gap-6 rounded-b-md bg-background px-6 py-4">
        <FormComponents.Button
          type="button"
          className="px-6"
          onClick={handleCloseDialog}
        >
          Fechar
        </FormComponents.Button>
      </footer>
    </B2BPattern.Popups.Modal.Content>
  )
}
