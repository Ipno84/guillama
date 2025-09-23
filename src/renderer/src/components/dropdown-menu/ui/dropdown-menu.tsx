import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const { Root } = DropdownMenuPrimitive

export const DropdownMenu = ({
  ...props
}: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="dropdown-menu" {...props} />
)
