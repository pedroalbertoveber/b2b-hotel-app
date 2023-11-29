// Core
import type { ComponentProps } from 'react'

// Libs
import { twMerge } from 'tailwind-merge'

type DivisorProps = ComponentProps<'div'> & {
  direction: 'x' | 'y'
}

/**
 *
 * @param divisor: Enum of direction, x or y, where x is horizontal and y is vertical
 * @returns
 */
export function Divisor({ direction, className, ...props }: DivisorProps) {
  return direction === 'x' ? (
    <div className={twMerge('h-px bg-divider/20', className)} {...props} />
  ) : (
    <div className={twMerge('w-px bg-divider/20', className)} {...props} />
  )
}
