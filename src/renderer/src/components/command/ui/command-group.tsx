import { cn } from '@renderer/lib/cn'
import { Command as CommandPrimitive } from 'cmdk'

const { Group } = CommandPrimitive

export const CommandGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Group>): React.JSX.Element => (
  <Group
    data-slot="command-group"
    className={cn(
      'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
      className
    )}
    {...props}
  />
)
