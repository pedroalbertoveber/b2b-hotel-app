// Core
import type { ComponentProps } from 'react'

// Libs
import { twMerge } from 'tailwind-merge'

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={twMerge(
        'rounded-[10px] border border-divider/20 bg-background-paper p-6',
        className,
      )}
    />
  )
}
