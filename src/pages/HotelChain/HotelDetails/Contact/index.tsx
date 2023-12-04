import * as Tabs from '@/components/Interactive/Tabs'
import AditionalContact from './AditionalContact/AditionalContact'
import MainContact from './MainContact/MainContact'

export default function Contact() {
  return (
    <Tabs.Content
      value="contact"
      className="mt-6 grid w-full grid-cols-1 gap-2 lg:grid-cols-2"
    >
      <MainContact />
      <AditionalContact />
    </Tabs.Content>
  )
}
