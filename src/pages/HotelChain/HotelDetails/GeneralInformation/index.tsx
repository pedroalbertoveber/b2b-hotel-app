import * as Tabs from '@/components/Interactive/Tabs'
import General from './General/General'
import Legal from './Legal/Legal'
export default function GeneralInformation() {
  return (
    <Tabs.Content
      value="general-info"
      className="mt-6 grid w-full grid-cols-1 gap-2 lg:grid-cols-2"
    >
      <General />
      <Legal />
      {/* <Comodities />
      <Taxes /> */}
    </Tabs.Content>
  )
}
