interface Props {
  info: string
  value: string
}

export default function BasicInfo({ info, value }: Props) {
  return (
    <div className="flex min-h-[1rem] w-full justify-between">
      <p className="w-1/2 capitalize text-primary">{info || ''}</p>
      <p className="text-textSecondary w-1/2 break-all capitalize">
        {value || ''}
      </p>
    </div>
  )
}
