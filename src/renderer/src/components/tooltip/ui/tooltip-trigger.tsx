import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const { Trigger } = TooltipPrimitive

export const TooltipTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>): React.JSX.Element => (
  <Trigger data-slot="tooltip-trigger" {...props} />
)
