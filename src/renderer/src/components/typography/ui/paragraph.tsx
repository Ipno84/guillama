import { cn } from '@renderer/lib/cn'

export const Paragraph = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>): React.JSX.Element => {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  )
}
