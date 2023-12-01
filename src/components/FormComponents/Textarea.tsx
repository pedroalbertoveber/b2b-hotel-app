import React, { type ComponentProps, useState } from 'react'

// Libs
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'
import type { UseFormRegisterReturn } from 'react-hook-form'

const textareaVariants = tv({
  base: 'absolute text-base duration-300 text-text-disabled group-hover:text-text-primary group-enabled:group-hover:cursor-pointer group-data-[active=true]:text-text-primary group-data-[error=true]:group-data-[active=true]:text-error group-data-[disabled=true]:text-borderColor/30',
  variants: {
    variant: {
      form: 'group-data-[active=true]:mt-[-2.375rem] group-data-[active=true]:ml-[-0.75rem] group-data-[active=true]:text-sm',
      filter:
        'block px-1 bg-white group-data-[active=true]:mt-[-1.265rem] group-data-[active=true]:text-xs group-data-[active=true]:ml-[-0.25rem]',
    },
  },
  defaultVariants: {
    variant: 'form',
  },
})

type TextareaVariantions = VariantProps<typeof textareaVariants>
type TextareaProps = TextareaVariantions &
  ComponentProps<'textarea'> & {
    label: string
    onValueChange?: (value: string) => void
    errorMessage?: string | null
    register?: UseFormRegisterReturn<string>
  }

export function Textarea({
  label,
  variant,
  onValueChange,
  register,
  className,
  errorMessage = null,
  ...props
}: TextareaProps): JSX.Element {
  const [isFocusedOrIsFilled, setIsFocusOrIsFilled] = useState(!!props.value)

  const hasError = !!errorMessage
  const isDisabled = props.disabled
  const placeholder = isFocusedOrIsFilled ? props.placeholder : ''

  function handleTextareaFocus(): void {
    setIsFocusOrIsFilled(true)
  }

  function handleTextareaBlur(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    if (!e.target.value) {
      setIsFocusOrIsFilled(false)
    }
  }

  function handleTextareaChange(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void {
    setIsFocusOrIsFilled(!!e.target.value)
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  return (
    <div className={twMerge('w-full space-y-1.5', className)}>
      <div className="relative flex w-full flex-col">
        <div
          data-active={isFocusedOrIsFilled}
          data-error={hasError}
          data-disabled={isDisabled}
          className="
          border-text-disabled data-[disabled=false]:hover:border-text-primary data-[disabled=true]:border-borderColor/30 focus-within:border-text-primary group mt-auto flex h-[9.063rem] w-full items-start justify-start rounded-[0.375rem]
          border p-3
          transition-all  
          enabled:hover:cursor-pointer 
          data-[error=true]:border-error"
        >
          <label className={textareaVariants({ variant })}>{label}</label>
          <textarea
            {...props}
            {...register}
            data-disabled={isDisabled}
            className="
            data-[disabled=true]:text-borderColor/30 text-text-primary z-10 h-full w-full resize-none border-none bg-transparent pr-3
            leading-6 focus:outline-none"
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            onChange={handleTextareaChange}
            placeholder={placeholder}
          />
        </div>
      </div>

      {hasError && (
        <span className="block text-sm text-error">{errorMessage}</span>
      )}
    </div>
  )
}
