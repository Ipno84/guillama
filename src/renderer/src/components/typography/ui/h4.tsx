import { cn } from '@renderer/lib/cn'

export const H4 = ({
  className,
  children,
  ...props
}: React.ComponentProps<'h4'>): React.JSX.Element => {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  )
}
