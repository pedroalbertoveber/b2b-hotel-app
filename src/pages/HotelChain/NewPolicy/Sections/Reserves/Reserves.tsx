import BuyWindow from './Sections/buyWindow/BuyWindow'
import Periods from './Sections/periods/Periods'

export default function Reserves({ policy }: { policy: any }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <BuyWindow policy={policy} />
        <Periods policy={policy} />
      </div>
    </div>
  )
}
