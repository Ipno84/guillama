import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const { Trigger } = DropdownMenuPrimitive

export const DropdownMenuTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>): React.JSX.Element => (
  <Trigger data-slot="dropdown-menu-trigger" {...props} />
)
