import { cn } from '@renderer/lib/cn'

export const Small = ({
  className,
  children,
  ...props
}: React.ComponentProps<'small'>): React.JSX.Element => {
  return (
    <small className={cn('text-sm leading-none font-medium', className)} {...props}>
      {children}
    </small>
  )
}
