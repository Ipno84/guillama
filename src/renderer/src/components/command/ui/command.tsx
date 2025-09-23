import { cn } from '@renderer/lib/cn'
import { Command as CommandPrimitive } from 'cmdk'

export const Command = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>): React.JSX.Element => (
  <CommandPrimitive
    data-slot="command"
    className={cn(
      'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
      className
    )}
    {...props}
  />
)
