import * as Tabs from '@/components/Interactive/Tabs'
import AditionalContact from './AditionalContact/AditionalContact'
import MainContact from './MainContact/MainContact'

export default function Contact() {
  return (
    <Tabs.Content
      value="contact"
      className="mt-6 grid w-full grid-cols-1 gap-2 duration-150 peer-hover:mt-8"
    >
      <MainContact data={[]} />
      <AditionalContact data={[]} />
    </Tabs.Content>
  )
}
