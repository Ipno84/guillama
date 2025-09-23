import { cn } from '@renderer/lib/cn'

export const H3 = ({
  className,
  children,
  ...props
}: React.ComponentProps<'h3'>): React.JSX.Element => {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  )
}
