import { cn } from '@renderer/lib/cn'

export const CardTitle = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="card-title"
    className={cn('font-black text-2xl text-card-foreground', className)}
    {...props}
  />
)
