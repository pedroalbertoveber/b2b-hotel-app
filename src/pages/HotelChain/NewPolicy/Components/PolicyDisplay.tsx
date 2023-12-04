import React from 'react'
import * as Tabs from '@/components/Interactive/Tabs'

export default function PolicyDisplay({ currentPolicy }) {
  return (
    <Tabs.Root orientation="horizontal" defaultValue="pt-br" className="gap-4">
      <Tabs.List className="flex w-1/2 justify-start gap-12 rounded-none border-0 bg-transparent shadow-none">
        <Tabs.TriggerGhost
          disabled={!currentPolicy.description.PT_BR}
          value="pt-br"
        >
          SOBRE
        </Tabs.TriggerGhost>
        <Tabs.TriggerGhost
          disabled={!currentPolicy.description.EN_US}
          value="en"
        >
          ABOUT
        </Tabs.TriggerGhost>
        <Tabs.TriggerGhost
          disabled={!currentPolicy.description.ES_ES}
          value="es"
        >
          ACERCA
        </Tabs.TriggerGhost>
      </Tabs.List>

      <Tabs.Content className="p-0" value="pt-br">
        <p>{currentPolicy.description.PT_BR}</p>
      </Tabs.Content>
      <Tabs.Content value="en">
        <p>{currentPolicy.description.EN_US}</p>
      </Tabs.Content>
      <Tabs.Content value="es">
        <p>{currentPolicy.description.ES_ES}</p>
      </Tabs.Content>
    </Tabs.Root>
  )
}
