import { cn } from '@renderer/lib/cn'
import * as ResizablePrimitive from 'react-resizable-panels'

const { PanelGroup } = ResizablePrimitive

export const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>): React.JSX.Element => (
  <PanelGroup
    data-slot="resizable-panel-group"
    className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
    {...props}
  />
)
