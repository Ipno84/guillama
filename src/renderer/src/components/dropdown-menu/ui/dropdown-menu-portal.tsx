import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const { Portal } = DropdownMenuPrimitive

export const DropdownMenuPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>): React.JSX.Element => (
  <Portal data-slot="dropdown-menu-portal" {...props} />
)
