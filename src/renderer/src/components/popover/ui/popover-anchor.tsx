import * as PopoverPrimitive from '@radix-ui/react-popover'

const { Anchor } = PopoverPrimitive

export const PopoverAnchor = ({
  ...props
}: React.ComponentProps<typeof Anchor>): React.JSX.Element => (
  <Anchor data-slot="popover-anchor" {...props} />
)
