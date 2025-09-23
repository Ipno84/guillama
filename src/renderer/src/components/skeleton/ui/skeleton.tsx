import { cn } from '@renderer/lib/cn'

export const Skeleton = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="skeleton"
    className={cn('bg-accent animate-pulse rounded-md', className)}
    {...props}
  />
)
