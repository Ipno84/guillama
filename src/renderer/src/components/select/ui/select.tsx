import * as SelectPrimitive from '@radix-ui/react-select'

const { Root } = SelectPrimitive

export const Select = ({ ...props }: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="select" {...props} />
)
