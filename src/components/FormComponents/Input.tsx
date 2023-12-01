// Core
import React, { useState, type ComponentProps } from 'react'

// Libs
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'
import type { UseFormRegisterReturn } from 'react-hook-form'

const inputVariants = tv({
  base: 'absolute block bg-white text-base duration-300 group-data-[disabled=false]:group-hover:text-text-primary group-data-[disabled=false]:group-hover:cursor-pointer group-data-[active=true]:text-text-primary group-data-[error=true]:group-data-[active=true]:text-error group-data-[disabled=true]:text-borderColor/30',
  variants: {
    variant: {
      form: 'group-data-[active=true]:mb-[4.875rem] group-data-[active=true]:ml-[-0.75rem] group-data-[active=true]:text-sm',
      filter:
        'block bg-white duration-300 group-data-[active=true]:mb-[3rem] group-data-[active=true]:px-1 group-data-[active=true]:ml-[-4px] group-data-[active=true]:text-xs',
    },
  },
  defaultVariants: {
    variant: 'form',
  },
})

type InputProps = VariantProps<typeof inputVariants> &
  ComponentProps<'input'> & {
    label: string
    onValueChange?: (value: string) => void
    register?: UseFormRegisterReturn<string>
    errorMessage?: string | null
  }

export function Input({
  label,
  variant,
  onValueChange,
  register,
  className,
  errorMessage = null,
  ...props
}: InputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(!!props.value ?? false)

  const hasError = !!errorMessage
  const isDisabled = props.disabled
  const placeholder = isFocused ? props.placeholder : ''

  function handleInputFocus(): void {
    setIsFocused(true)
  }

  function handleInputBlur(e: React.ChangeEvent<HTMLInputElement>): void {
    if (!e.target.value) {
      setIsFocused(false)
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  return (
    <div className={twMerge('w-full space-y-1.5', className)}>
      <div
        data-active={isFocused}
        data-error={hasError}
        data-disabled={isDisabled}
        className="
            border-text-disabled data-[error=false]:data-[disabled=false]:hover:border-text-primary data-[disabled=true]:border-borderColor/30 data-[disabled=true]:text-borderColor/30 focus-within:border-text-primary group mt-auto flex h-[3rem] w-full items-center justify-start
            rounded-[0.375rem] border
            p-3 transition-all  
            enabled:hover:cursor-pointer 
            data-[error=true]:border-error"
      >
        <label className={inputVariants({ variant })}>{label}</label>

        <input
          {...props}
          {...register}
          className="
              text-text-primary group-data-[disabled=true]:text-borderColor/30 z-10 w-full border-none bg-transparent 
              leading-none focus:outline-none"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>

      {hasError && (
        <span className="block text-sm text-error">{errorMessage}</span>
      )}
    </div>
  )
}
