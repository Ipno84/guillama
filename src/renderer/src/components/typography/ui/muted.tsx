import { cn } from '@renderer/lib/cn'

export const Muted = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>): React.JSX.Element => {
  return (
    <p className={cn('text-muted-foreground text-sm', className)} {...props}>
      {children}
    </p>
  )
}
