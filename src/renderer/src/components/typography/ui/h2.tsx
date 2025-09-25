import { cn } from '@renderer/lib/cn'

export const H2 = ({
  className,
  children,
  ...props
}: React.ComponentProps<'h2'>): React.JSX.Element => {
  return (
    <h2
      className={cn('text-3xl font-semibold tracking-tight first:mt-0 text-foreground', className)}
      {...props}
    >
      {children}
    </h2>
  )
}
