import { cn } from '@renderer/lib/cn'

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="card-footer"
    className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
    {...props}
  />
)
