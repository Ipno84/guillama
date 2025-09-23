import * as PopoverPrimitive from '@radix-ui/react-popover'

const { Trigger } = PopoverPrimitive

export const PopoverTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>): React.JSX.Element => (
  <Trigger data-slot="popover-trigger" {...props} />
)
