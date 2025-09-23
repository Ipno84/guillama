import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const { RadioGroup } = DropdownMenuPrimitive

export const DropdownMenuRadioGroup = ({
  ...props
}: React.ComponentProps<typeof RadioGroup>): React.JSX.Element => (
  <RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
)
