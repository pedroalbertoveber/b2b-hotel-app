// Core
import React, {
  createContext,
  type ComponentProps,
  useContext,
  useId,
} from 'react'

// Components
import * as Switch from '@radix-ui/react-switch'

// Libs
import { twMerge } from 'tailwind-merge'

type RootProps = ComponentProps<'div'> & {
  disabled?: boolean
}

export function Root({
  className,
  disabled = false,
  ...props
}: RootProps): JSX.Element {
  return (
    <SwitchProvider disabled={disabled}>
      <div
        {...props}
        className={twMerge('flex items-center justify-center gap-2', className)}
      />
    </SwitchProvider>
  )
}

export function Thumb({
  className,
  ...props
}: Switch.SwitchProps): JSX.Element {
  const { customId, disabled } = useSwitch()

  return (
    <Switch.Root
      disabled={disabled}
      id={customId}
      className="data-[state=unchecked]:bg-text-disabled relative flex h-6 w-[44px] cursor-default items-center rounded-full enabled:cursor-pointer data-[state=checked]:bg-[#D5E3FF]"
      {...props}
    >
      <Switch.Thumb className="data-[state=unchecked]:bg-text-secondary block h-[20px] w-[20px] cursor-pointer rounded-full transition-transform duration-100 data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[2px] data-[state=checked]:bg-primary" />
    </Switch.Root>
  )
}

export function Label({
  className,
  ...props
}: ComponentProps<'label'>): JSX.Element {
  const { customId, disabled } = useSwitch()
  return (
    <label
      data-disabled={disabled}
      htmlFor={customId}
      {...props}
      className={twMerge(
        'text-text-primary data-[disabled=true]:text-text-disabled data-[disabled=false]:cursor-pointer',
        className,
      )}
    />
  )
}

interface SwitchProps {
  customId: string
  disabled: boolean
}

export const SwitchContext = createContext<SwitchProps | null>(null)

export const SwitchProvider = ({
  children,
  disabled,
}: {
  children: React.ReactNode
  disabled: boolean
}): JSX.Element => {
  const customId = useId()

  return (
    <SwitchContext.Provider value={{ customId, disabled }}>
      {children}
    </SwitchContext.Provider>
  )
}

export const useSwitch = (): SwitchProps => {
  const context = useContext(SwitchContext)

  if (!context) {
    throw new Error('useSwitch must be used within a SwitchProvider')
  }

  return context
}
