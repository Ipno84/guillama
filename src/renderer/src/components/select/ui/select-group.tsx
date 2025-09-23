import * as SelectPrimitive from '@radix-ui/react-select'

const { Group } = SelectPrimitive

export const SelectGroup = ({
  ...props
}: React.ComponentProps<typeof Group>): React.JSX.Element => (
  <Group data-slot="select-group" {...props} />
)
