import * as Tabs from '@/components/Interactive/Tabs'
import Comodities from './Comodities/Comodities'
import General from './General/General'
import Legal from './Legal/Legal'
import Taxes from './Taxes/Taxes'

export default function GeneralInformation() {
  return (
    <Tabs.Content
      value="general-info"
      className="mt-6 grid w-full grid-cols-1 gap-2 duration-150 peer-hover:mt-8 md:grid-cols-2"
    >
      <General data={[]} />
      <Legal data={[]} />
      <Comodities data={[]} />
      <Taxes data={[]} />
    </Tabs.Content>
  )
}
