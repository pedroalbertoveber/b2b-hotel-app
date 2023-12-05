import PolicyTariffs from './Sections/PolicyTariffs'

export default function Tariffs({ policy }: { policy: any }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <PolicyTariffs />
      </div>
    </div>
  )
}
