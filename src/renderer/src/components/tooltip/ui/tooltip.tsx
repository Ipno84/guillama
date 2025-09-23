import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { TooltipProvider } from './tooltip-provider'

const { Root } = TooltipPrimitive

export const Tooltip = ({ ...props }: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <TooltipProvider>
    <Root data-slot="tooltip" {...props} />
  </TooltipProvider>
)
