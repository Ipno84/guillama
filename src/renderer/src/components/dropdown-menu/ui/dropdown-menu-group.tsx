import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const { Group } = DropdownMenuPrimitive

export const DropdownMenuGroup = ({
  ...props
}: React.ComponentProps<typeof Group>): React.JSX.Element => (
  <Group data-slot="dropdown-menu-group" {...props} />
)
