import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const { Sub } = DropdownMenuPrimitive

export const DropdownMenuSub = ({
  ...props
}: React.ComponentProps<typeof Sub>): React.JSX.Element => (
  <Sub data-slot="dropdown-menu-sub" {...props} />
)
