import Cancellation from './Sections/cancellation/Cancellation'
import Childs from './Sections/childs/Childs'
import Guarantee from './Sections/guarantee/Guarantee'
import Hours from './Sections/hours/Hours'
import Pension from './Sections/pension/Pension'
import Pets from './Sections/pets/Pets'
import SanitaryProtocols from './Sections/sanitaryProtocols/SanitaryProtocols'

export default function Conditions({ policy }: { policy: any }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <Hours policy={policy} />
        <Pension policy={policy} />
        <Childs policy={policy} />
        <div className="flex w-full flex-col gap-8">
          <Pets policy={policy} />
          <Guarantee policy={policy} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <Cancellation policy={policy} />
        <SanitaryProtocols policy={policy} />
      </div>
    </div>
  )
}
