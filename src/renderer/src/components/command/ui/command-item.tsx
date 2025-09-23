import { cn } from '@renderer/lib/cn'
import { Command as CommandPrimitive } from 'cmdk'

const { Item } = CommandPrimitive

export const CommandItem = ({
  className,
  ...props
}: React.ComponentProps<typeof Item>): React.JSX.Element => (
  <Item
    data-slot="command-item"
    className={cn(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    {...props}
  />
)
