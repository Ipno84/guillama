import { cn } from '@renderer/lib/cn'

export const CardContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div data-slot="card-content" className={cn('px-6', className)} {...props} />
)
