import { twMerge } from 'tailwind-merge'

export default function Title({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  const defaultClasses = 'text-large text-primary font-[600] mb-12 uppercase'
  return (
    <p
      className={
        className ? twMerge(defaultClasses, className) : defaultClasses
      }
    >
      {title}
    </p>
  )
}
