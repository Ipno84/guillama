import * as DialogPrimitive from '@radix-ui/react-dialog'

const { Portal } = DialogPrimitive

export const DialogPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>): React.JSX.Element => (
  <Portal data-slot="dialog-portal" {...props} />
)
