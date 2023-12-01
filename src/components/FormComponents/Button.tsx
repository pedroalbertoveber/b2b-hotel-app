// Core
import React, { type ComponentProps } from 'react'

// Libs
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  variants: {
    variant: {
      primary:
        'bg-primary px-6 py-3 flex items-center justify-center rounded-[6px] gap-2 text-white font-semibold text-base transition-colors enabled:hover:bg-primaryDark disabled:bg-text-disabled',

      secondary:
        'bg-transparent px-6 py-3 border border-borderColor/20 flex items-center justify-center rounded-[6px] gap-2 text-primary font-semibold text-base transition-colors enabled:hover:bg-zinc-100 disabled:text-text-disabled',

      'ghost-primary':
        'bg-transparent px-2 py-1 flex items-center justify-center rounded-[6px] gap-2 text-primary font-semibold text-base transition-colors enabled:hover:bg-zinc-100 disabled:text-text-disabled',

      'ghost-secondary':
        'bg-transparent px-2 py-1 flex items-center justify-center rounded-[6px] gap-2 text-secondary font-semibold text-xs transition-colors enabled:hover:bg-zinc-100 disabled:text-text-disabled',

      warning:
        'bg-warning px-6 py-3 flex items-center justify-center rounded-[6px] gap-2 text-white font-semibold text-base transition-colors enabled:hover:bg-warningDark disabled:bg-text-disabled',

      alert:
        'bg-error px-6 py-3 flex items-center justify-center rounded-[6px] gap-2 text-white font-semibold text-base transition-colors enabled:hover:bg-errorDark disabled:bg-text-disabled',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>
type ButtonProps = ComponentProps<'button'> & ButtonVariants

export function Button({
  variant,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={buttonVariants({ variant, className })} {...props} />
  )
}
