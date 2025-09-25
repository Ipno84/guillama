import { cn } from '@renderer/lib/cn'

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="card-description"
    className={cn('text-card-foreground text-sm font-light', className)}
    {...props}
  />
)
