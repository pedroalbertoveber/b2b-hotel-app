import { FaMoneyBill, FaPercent } from 'react-icons/fa6'
import { TaxesInterface } from '../interface/type'
import { useState } from 'react'

export default function PaymentType({
  tax,
  disabled = false,
}: {
  tax: TaxesInterface
  disabled?: boolean
}) {
  const [selected, setSelected] = useState(tax.paymentType)
  const defaultClass = 'w-8 h-auto p-2 rounded-full border'
  const selectedClass = 'bg-primary text-white'
  const notSelected = 'bg-white text-primary'
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <button
        disabled={disabled}
        onClick={() => {
          const aux = selected === 'money' ? null : 'money'
          tax.paymentType = aux
          setSelected(aux)
        }}
        type="button"
      >
        <div>
          <FaMoneyBill
            className={`${
              selected === 'money' ? selectedClass : notSelected
            } ${defaultClass} ${disabled ? 'opacity-20' : ''}`}
          />
        </div>
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          const aux = selected === 'percent' ? null : 'percent'
          tax.paymentType = aux
          setSelected(aux)
          console.log(tax)
        }}
        type="button"
      >
        <div>
          <FaPercent
            className={`${
              selected === 'percent' ? selectedClass : notSelected
            } ${defaultClass} ${disabled ? 'opacity-20' : ''}`}
          />
        </div>
      </button>
    </div>
  )
}
