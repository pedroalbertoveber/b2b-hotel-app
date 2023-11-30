import { twMerge } from 'tailwind-merge'

export default function SubTitle({
  title,
  classes,
}: {
  title: string
  classes?: string
}) {
  const defaultClasses = 'text-primary font-semibold'
  return (
    <p className={classes ? twMerge(defaultClasses, classes) : classes}>
      {title}
    </p>
  )
}
