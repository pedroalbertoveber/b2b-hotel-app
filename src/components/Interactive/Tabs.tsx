// Libs
import { twMerge } from 'tailwind-merge'

// Components
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export function Root(props: TabsPrimitive.TabsProps) {
  return <Tabs {...props} />
}

export function List({ className, ...props }: TabsPrimitive.TabsListProps) {
  return (
    <TabsList
      {...props}
      className={twMerge(
        'flex w-full flex-col rounded-[10px] border border-divider/20 bg-white p-2 shadow-menubar md:flex-row',
        className,
      )}
    />
  )
}

export function Trigger({
  className,
  ...props
}: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsTrigger
      {...props}
      className={twMerge(
        'w-full rounded-[10px] bg-transparent py-2 text-xs font-semibold uppercase text-primary duration-150 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=inactive]:hover:bg-zinc-100',
        className,
      )}
    />
  )
}

export function Content(props: TabsPrimitive.TabsContentProps) {
  return <TabsContent {...props} />
}
