import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderer/lib/cn'

const { Label } = DropdownMenuPrimitive

export const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof Label> & {
  inset?: boolean
}): React.JSX.Element => (
  <Label
    data-slot="dropdown-menu-label"
    data-inset={inset}
    className={cn('px-2 py-1.5 text-xs font-light text-foreground/60 data-[inset]:pl-8', className)}
    {...props}
  />
)
