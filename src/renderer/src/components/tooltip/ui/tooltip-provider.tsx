import * as TooltipPrimitive from '@radix-ui/react-tooltip'

const { Provider } = TooltipPrimitive

export const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof Provider>): React.JSX.Element => (
  <Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />
)
