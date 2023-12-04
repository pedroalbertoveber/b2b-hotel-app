import Comission from './Sections/comissions/Comission'
import Currency from './Sections/currency/Currency'
import PaymentMethods from './Sections/paymentMethod/PaymentMethods'
import Taxes from './Sections/taxes/Taxes'

export default function Financial({ policy }: { policy: any }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <PaymentMethods policy={policy} />
        <Comission policy={policy} />
      </div>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <Taxes policy={policy} />
        <Currency policy={policy} />
      </div>
    </div>
  )
}
