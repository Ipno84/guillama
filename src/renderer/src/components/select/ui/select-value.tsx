import * as SelectPrimitive from '@radix-ui/react-select'

const { Value } = SelectPrimitive

export const SelectValue = ({
  ...props
}: React.ComponentProps<typeof Value>): React.JSX.Element => (
  <Value data-slot="select-value" {...props} />
)
