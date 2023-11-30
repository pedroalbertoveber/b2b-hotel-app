import { twMerge } from 'tailwind-merge'

export default function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={twMerge(
        'mx-auto my-4 flex w-full max-w-[1264px] flex-col items-start justify-end overflow-hidden px-2 md:my-12 md:px-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
