import { cn } from '@renderer/lib/cn'

export const H4 = ({
  className,
  children,
  ...props
}: React.ComponentProps<'h4'>): React.JSX.Element => {
  return (
    <h4
      className={cn('text-xl font-semibold tracking-tight text-foreground', className)}
      {...props}
    >
      {children}
    </h4>
  )
}
