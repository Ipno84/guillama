import { cn } from '@renderer/lib/cn'

export const Card = ({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="card"
    className={cn(
      'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
      className
    )}
    {...props}
  />
)
