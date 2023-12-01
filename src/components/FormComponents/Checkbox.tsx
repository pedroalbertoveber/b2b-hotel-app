// Core
import React, {
  createContext,
  type ComponentProps,
  useContext,
  useId,
} from 'react'

// Components
import * as Checkbox from '@radix-ui/react-checkbox'

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
    <CheckboxProvider disabled={disabled}>
      <div
        {...props}
        className={twMerge('flex items-center justify-center gap-2', className)}
      />
    </CheckboxProvider>
  )
}

export function Trigger({
  className,
  ...props
}: Checkbox.CheckboxProps): JSX.Element {
  const { customId, disabled } = useCheckbox()

  return (
    <Checkbox.Root
      id={customId}
      disabled={disabled}
      className={twMerge(
        'disabled:bg-text-disabled border-text-primary flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border bg-transparent text-white data-[state=checked]:border-none data-[state=checked]:bg-primary',
        className,
      )}
      {...props}
    >
      <Checkbox.Indicator className="text-white">
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.62445 5.50452L4.57683 8.4734C4.65593 8.55524 4.75166 8.61753 4.85706 8.65574C4.96247 8.69394 5.07489 8.70711 5.18617 8.69427C5.29837 8.68293 5.40709 8.64653 5.50494 8.58756C5.6028 8.52859 5.68749 8.44843 5.75325 8.35253L12.6492 1.08787"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}

export function Label({
  className,
  ...props
}: ComponentProps<'label'>): JSX.Element {
  const { customId, disabled } = useCheckbox()
  return (
    <label
      data-disabled={disabled}
      htmlFor={customId}
      {...props}
      className={twMerge(
        'text-text-secondary data-[disabled=true]:text-text-disabled text-xs data-[disabled=false]:cursor-pointer',
        className,
      )}
    />
  )
}

interface CheckboxProps {
  customId: string
  disabled: boolean
}

export const CheckboxContext = createContext<CheckboxProps | null>(null)

export const CheckboxProvider = ({
  children,
  disabled,
}: {
  children: React.ReactNode
  disabled: boolean
}): JSX.Element => {
  const customId = useId()

  return (
    <CheckboxContext.Provider value={{ customId, disabled }}>
      {children}
    </CheckboxContext.Provider>
  )
}

export const useCheckbox = (): CheckboxProps => {
  const context = useContext(CheckboxContext)

  if (!context) {
    throw new Error('useCheckbox must be used within a CheckboxProvider')
  }

  return context
}
