import { cn } from '@renderer/lib/cn'
import { Command as CommandPrimitive } from 'cmdk'

const { List } = CommandPrimitive

export const CommandList = ({
  className,
  ...props
}: React.ComponentProps<typeof List>): React.JSX.Element => (
  <List
    data-slot="command-list"
    className={cn('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
    {...props}
  />
)
