import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const { Portal } = TooltipPrimitive

export const TooltipPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>): React.JSX.Element => (
  <Portal data-slot="tooltip-portal" {...props} />
)
