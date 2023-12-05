import React, { useState, type ReactNode } from 'react'

// Components
import * as Select from '@radix-ui/react-select'

// Lib
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

// Icons
import { PiCaretDown, PiCheck } from 'react-icons/pi'

const selectVariants = tv({
  base: 'absolute text-base text-textDisabled duration-300 group-enabled:group-hover:text-text-primary  group-enabled:group-data-[active=true]:text-text-primary group-enabled:group-data-[error=true]:group-data-[active=true]:text-error group-disabled:text-borderColor/30',
  variants: {
    variant: {
      form: 'group-data-[active=true]:mt-[-78px] group-data-[state=true]:ml-[-0.75rem] group-enabled:group-data-[active=true]:text-text-primary group-data-[active=true]:ml-[-0.75rem]',
      filter:
        'group-data-[active=true]:mt-[-46px] group-data-[active=true]:ml-[-4px] group-data-[active=true]:text-xs block px-1 bg-white group-enabled:group-data-[active=true]:text-text-primary',
    },
  },
  defaultVariants: {
    variant: 'filter',
  },
})

type RootProps = Omit<Select.SelectProps, 'onOpenChange' | 'open'> &
  VariantProps<typeof selectVariants> & {
    children: ReactNode
    label?: string
    className?: string
    placeholder?: string | null
    errorMessage?: string | null
  }

export function Root({
  children,
  variant,
  label,
  placeholder = '',
  errorMessage,
  className,
  ...props
}: RootProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(props.defaultOpen ?? false)

  const hasError = !!errorMessage
  const isDisabled = props.disabled
  const hasSomeSelected = !!props.value || !!props.defaultValue
  const shouldDisplayPlaceholder = !hasSomeSelected && isOpen

  return (
    <div className={twMerge('w-full space-y-1.5', className)}>
      <div className="relative flex w-full flex-col">
        <Select.Root {...props} onOpenChange={setIsOpen}>
          <Select.Trigger
            data-error={hasError}
            data-disabled={isDisabled}
            data-active={hasSomeSelected || isOpen}
            disabled={isDisabled}
            className="
              border-text-disabled enabled:hover:border-text-primary disabled:border-borderColor/30 enabled:data-[state=open]:border-text-primary enabled:focus-within:border-text-primary data-[disabled=true]:text-borderColor/30 group z-10 flex h-[3rem] items-center 
              justify-between 
              rounded-[0.375rem] 
              border p-3
              transition-all  
              enabled:hover:cursor-pointer   
              enabled:focus:outline-none enabled:data-[error=true]:border-error
              enabled:data-[error=true]:data-[state=open]:border-error"
          >
            {label && (
              <span className={selectVariants({ variant })}>{label}</span>
            )}

            <Select.Value
              data-disabled={isDisabled}
              placeholder={shouldDisplayPlaceholder ? placeholder : ''}
              className="text-text-primary data-[disabled=true]:text-borderColor/30 placeholder:text-text-disabled"
            />

            <Select.Icon className="ml-auto">
              <PiCaretDown
                color={
                  hasError
                    ? '#FF3A28'
                    : isDisabled
                      ? 'rgba(140,140,140, 0.3)'
                      : '#24262B'
                }
                className="group-hover:stroke-text-primary duration-300 group-data-[state=open]:rotate-180"
              />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              side="bottom"
              position="popper"
              className="
                border-text-primary scrollbar-thin scrollbar-thumb-primary z-[99] max-h-[10rem] w-[--radix-select-trigger-width] overflow-auto rounded-[0.375rem] border 
                bg-white p-2"
              sideOffset={8}
            >
              <Select.Viewport>{children}</Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      {hasError && (
        <span className="block text-sm text-error">{errorMessage}</span>
      )}
    </div>
  )
}

type ItemProps = Select.SelectItemProps & {
  text: string
  prefix?: JSX.Element
}

/**
 *
 * If you want to pass a prefix to the item, you must pass the prefix as a prop
 * @example
 * <Select.Item prefix={<PiCheck />} {..otherProps} />
 */
export function Item({ text, ...props }: ItemProps): JSX.Element {
  return (
    <Select.Item
      className="text-text-primary flex w-full cursor-pointer items-center justify-between p-2 pr-4 outline-none duration-300 hover:border-none hover:bg-zinc-50 hover:outline-none"
      {...props}
    >
      {props.prefix ? (
        <div className="flex flex-1 items-center justify-start gap-4">
          {props.prefix}
          <Select.ItemText className="text-text-primary ml-2">
            {text}
          </Select.ItemText>
        </div>
      ) : (
        <Select.ItemText className="text-text-primary">{text}</Select.ItemText>
      )}

      <Select.ItemIndicator>
        <PiCheck />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
