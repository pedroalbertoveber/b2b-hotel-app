// Core
import React, { type ComponentProps, useId, useState } from 'react'

// Libs
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

// Components
import * as Popover from '@radix-ui/react-popover'

// Icons
import { PiMagnifyingGlass, PiX } from 'react-icons/pi'

const comboboxVariants = tv({
  base: 'absolute text-base duration-300 text-text-disabled group-data-[disabled=false]:group-hover:text-text-primary group-enabled:group-hover:cursor-pointer group-data-[active=true]:text-text-primary   group-data-[error=true]:group-data-[active=true]:text-error group-data-[disabled=true]:text-borderColor/30',
  variants: {
    variant: {
      form: 'group-data-[active=true]:mb-[4.875rem] group-data-[active=true]:ml-[-0.75rem] group-data-[active=true]:text-sm',
      filter:
        'block px-1 bg-white group-data-[active=true]:mb-[3rem] group-data-[active=true]:ml-[-0.25rem] group-data-[active=true]:text-xs',
    },
  },
  defaultVariants: {
    variant: 'form',
  },
})

type ComboboxVariantions = VariantProps<typeof comboboxVariants>
type ComboboxProps = ComboboxVariantions &
  ComponentProps<'input'> & {
    items: any[]
    label: string
    className?: string
    labelProperty?: string
    valueProperty?: string
    errorMessage?: string | null
    onValueChange: (value: string) => void
  }

/**
 *
 * This component is a combination of an input and a select, it is used when you want to give the user the option to search for an item in a list of items
 * @param items - List of items that will be displayed in the select
 *
 * @param label - Label that will be displayed above the input
 *
 * @param labelProperty - Property of the item that will be displayed in the select, by default it is 'label' but you can pass another property according to your need
 *
 * @param valueProperty - Property of the item that will be returned when the user selects an item, by default it is 'value' but you can pass another property according to your need
 */
export function Combobox({
  items,
  label,
  variant,
  className,
  onValueChange,
  errorMessage = null,
  labelProperty = 'label',
  valueProperty = 'value',
  ...props
}: ComboboxProps): JSX.Element {
  const [search, setSearch] = useState<string>(
    props.value ? getItemByValue(props.value) : '',
  )
  const [isOpen, setIsOpen] = useState(false)

  const customId = useId()

  function getItemByValue(value: any): string {
    const item = items.find((item) => item[valueProperty] === value)
    return item[labelProperty]
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value)
  }

  function handleClearSearch(): void {
    setSearch('')
    onValueChange('')
  }

  function handleComboboxBlur(): void {
    setIsOpen(false)
  }

  function handleSelectItem(item: any): void {
    setSearch(item[labelProperty])
    handleComboboxBlur()
    onValueChange(item[valueProperty])
  }

  const hasError = !!errorMessage
  const isDisabled = props.disabled
  const placeholder = search ? '' : props.placeholder

  const filteredItems = items.filter((item) =>
    item[labelProperty].toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Popover.Root onOpenChange={setIsOpen} open={isOpen}>
      <div className={twMerge('relative w-full space-y-1.5', className)}>
        <div className="relative flex w-full flex-col">
          <div
            data-active={!!search || isOpen}
            data-error={hasError}
            data-disabled={isDisabled}
            className="
            border-text-disabled data-[disabled=false]:hover:border-text-primary data-[disabled=true]:border-borderColor/30 focus-within:border-text-primary data-[active=true]:border-text-primary group mt-auto flex h-[3rem] w-full items-center justify-start
            rounded-[0.375rem] border
            p-3  
            transition-all 
            enabled:hover:cursor-pointer
            data-[error=true]:border-error"
          >
            <label className={comboboxVariants({ variant })}>{label}</label>

            <Popover.Trigger
              disabled={isOpen || isDisabled}
              className="flex w-full items-center justify-between gap-4"
            >
              <input
                {...props}
                className="
                text-text-primary group-data-[disabled=true]:text-borderColor/30 z-10 h-full w-full border-none bg-transparent 
                leading-6
                focus:outline-none"
                id={props.id ?? customId}
                onChange={handleInputChange}
                placeholder={isOpen ? placeholder : ''}
                value={search}
              />

              {search ? (
                <div onClick={handleClearSearch}>
                  <PiX
                    color={isDisabled ? 'rgba(140,140,140, 0.3)' : '#24262B'}
                    className="group-data-[disabled=true]:hidden"
                  />
                </div>
              ) : (
                <label htmlFor={props.id ?? customId}>
                  <PiMagnifyingGlass
                    color={isDisabled ? 'rgba(140,140,140, 0.3)' : '#24262B'}
                  />
                </label>
              )}
            </Popover.Trigger>
          </div>
        </div>

        {hasError && (
          <span className="block text-sm text-error">{errorMessage}</span>
        )}

        {isOpen && (
          <Popover.Portal>
            <Popover.Content
              sticky="always"
              side="bottom"
              sideOffset={21}
              className="
            border-text-primary 
            scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded z-20 max-h-[10rem] w-[calc(var(--radix-popover-trigger-width)+24px)] overflow-auto rounded-[0.375rem] 
            border bg-white p-2 pr-4"
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <Item
                    key={index}
                    text={item[labelProperty]}
                    value={item[valueProperty]}
                    onClick={() => {
                      handleSelectItem(item)
                    }}
                  />
                ))
              ) : (
                <span className="text-text-primary block p-2">
                  Não foi encontrado resultado para sua busca
                </span>
              )}
            </Popover.Content>
          </Popover.Portal>
        )}
      </div>
    </Popover.Root>
  )
}

type ItemProps = ComponentProps<'button'> & {
  text: string
}

/**
 *
 * If you want to pass a prefix to the item, you must pass the prefix as a prop
 * @example
 * <Select.Item prefix={<PiCheck />} {..otherProps} />
 */
export function Item({ text, ...props }: ItemProps): JSX.Element {
  return (
    <button
      className="text-text-primary flex w-full cursor-pointer items-center justify-between p-2 pr-4 outline-none duration-300 hover:border-none hover:bg-zinc-50 hover:outline-none"
      {...props}
    >
      {props.prefix ? (
        <div className="flex flex-1 items-center justify-start gap-4">
          {props.prefix}
          <span className="text-text-primary ml-2">{text}</span>
        </div>
      ) : (
        <span className="text-text-primary">{text}</span>
      )}
    </button>
  )
}
