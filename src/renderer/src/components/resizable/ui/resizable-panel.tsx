import * as ResizablePrimitive from 'react-resizable-panels'

const { Panel } = ResizablePrimitive

export const ResizablePanel = ({
  ...props
}: React.ComponentProps<typeof Panel>): React.JSX.Element => (
  <Panel data-slot="resizable-panel" {...props} />
)
