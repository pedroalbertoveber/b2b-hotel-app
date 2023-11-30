import { twMerge } from 'tailwind-merge'

export default function Title({
  title,
  classes,
}: {
  title: string
  classes?: string
}) {
  const defaultClasses = 'text-large text-primary font-[600] mb-12 uppercase'
  return (
    <p className={classes ? twMerge(defaultClasses, classes) : defaultClasses}>
      {title}
    </p>
  )
}
