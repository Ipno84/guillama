import * as PopoverPrimitive from '@radix-ui/react-popover'

const { Root } = PopoverPrimitive

export const Popover = ({ ...props }: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="popover" {...props} />
)
