import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '@renderer/lib/cn'

const { Separator } = DropdownMenuPrimitive

export const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>): React.JSX.Element => (
  <Separator
    data-slot="dropdown-menu-separator"
    className={cn('bg-border -mx-1 my-1 h-px', className)}
    {...props}
  />
)
