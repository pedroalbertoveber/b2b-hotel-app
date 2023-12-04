import { B2BPattern } from '@/components'
import { FaCheck, FaEye, FaPencil } from 'react-icons/fa6'

export default function SectionTitle({
  title,
  isEditing = false,
  handle,
  disabled = false,
}: {
  title: string
  handle?: any
  isEditing?: boolean
  disabled?: boolean
}) {
  return (
    <div className="flex w-full items-center justify-between">
      <B2BPattern.Texts.Subtitle
        classes="text-[1rem] uppercase font-[600]"
        title={title}
      ></B2BPattern.Texts.Subtitle>
      <button onClick={handle} disabled={disabled} type="button">
        {disabled ? (
          <div className="flex items-center gap-2">
            <FaEye className="text-textSecondary " />
            <p className="text-small">Somente Leitura</p>
          </div>
        ) : isEditing ? (
          <FaCheck className="text-primary" />
        ) : (
          <FaPencil className="text-primary" />
        )}
      </button>
    </div>
  )
}
