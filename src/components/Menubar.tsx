// Libs
import { twMerge } from 'tailwind-merge'

// Components
import * as Tabs from '@radix-ui/react-tabs'

export function Root(props: Tabs.TabsProps) {
  return <Tabs.Root {...props} />
}

export function List({ className, ...props }: Tabs.TabsListProps) {
  return (
    <Tabs.List
      {...props}
      className={twMerge(
        'shadow-menubar w-full rounded-[10px] border border-divider/20 bg-white p-2',
        className,
      )}
    />
  )
}

export function Trigger({ className, ...props }: Tabs.TabsTriggerProps) {
  return (
    <Tabs.Trigger
      {...props}
      className={twMerge(
        'w-full rounded-[10px] bg-transparent py-2 text-xs font-semibold uppercase text-primary duration-150 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:hover:bg-zinc-100',
        className,
      )}
    />
  )
}

export function Content(props: Tabs.TabsContentProps) {
  return <Tabs.Content {...props} />
}
