import { cn } from '@renderer/lib/cn'
import { Command as CommandPrimitive } from 'cmdk'

const { Separator } = CommandPrimitive

export const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>): React.JSX.Element => (
  <Separator
    data-slot="command-separator"
    className={cn('bg-border -mx-1 h-px', className)}
    {...props}
  />
)
