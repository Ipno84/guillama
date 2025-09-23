import { cn } from '@renderer/lib/cn'

export const Lead = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>): React.JSX.Element => {
  return (
    <p className={cn('text-muted-foreground text-xl', className)} {...props}>
      {children}
    </p>
  )
}
