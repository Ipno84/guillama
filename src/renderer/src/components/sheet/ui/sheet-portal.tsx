import * as SheetPrimitive from '@radix-ui/react-dialog'

const { Portal } = SheetPrimitive

export const SheetPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>): React.JSX.Element => (
  <Portal data-slot="sheet-portal" {...props} />
)
