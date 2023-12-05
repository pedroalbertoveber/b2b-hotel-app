// Core
import React, { useState, forwardRef, type ComponentProps } from 'react'

// Libs
import { twMerge } from 'tailwind-merge'
import { tv, type VariantProps } from 'tailwind-variants'

const inputVariants = tv({
  base: 'absolute block bg-white text-base duration-300 group-data-[disabled=false]:group-hover:text-black group-data-[disabled=false]:group-hover:cursor-pointer group-data-[active=true]:text-black group-data-[error=true]:group-data-[active=true]:text-error group-data-[disabled=true]:text-divider/30',
  variants: {
    variant: {
      form: 'group-data-[active=true]:mb-[4.875rem] group-data-[active=true]:ml-[-0.75rem] group-data-[active=true]:text-sm',
      filter:
        'block bg-white duration-300 group-data-[active=true]:mb-[3rem] group-data-[active=true]:px-1 group-data-[active=true]:ml-[-4px] group-data-[active=true]:text-xs text-[0.75rem]',
    },
  },
  defaultVariants: {
    variant: 'filter',
  },
})

type InputProps = VariantProps<typeof inputVariants> &
  ComponentProps<'input'> & {
    label?: string
    onValueChange?: (value: string) => void
    errorMessage?: string | null
  }

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, variant, onValueChange, className, errorMessage = null, ...props },
  ref,
): JSX.Element {
  delete props.onBlur
  delete props.onFocus

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

  return (
    <div className={twMerge('w-full space-y-1.5', className)}>
      <div
        data-active={isFocused}
        data-error={hasError}
        data-disabled={isDisabled}
        className="
            border-text-disabled focus-within:border-text-primary group mt-auto flex h-[3rem] w-full items-center justify-start rounded-[0.375rem] border p-3
            transition-all enabled:hover:cursor-pointer
            data-[disabled=true]:border-divider/30 data-[error=true]:border-error  
            data-[disabled=true]:text-divider/30 
            data-[error=false]:data-[disabled=false]:hover:border-black"
      >
        {label && <label className={inputVariants({ variant })}>{label}</label>}

        <input
          ref={ref}
          className="
          text-text-primary z-10 w-full border-none bg-transparent text-small capitalize 
          leading-none placeholder:text-small focus:outline-none group-data-[disabled=true]:text-divider/30"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          {...props}
        />
      </div>

      {hasError && (
        <span className="block text-sm text-error">{errorMessage}</span>
      )}
    </div>
  )
})
