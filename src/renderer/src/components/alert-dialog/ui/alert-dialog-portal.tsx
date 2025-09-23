import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const { Portal } = AlertDialogPrimitive

export const AlertDialogPortal = (
  props: React.ComponentProps<typeof Portal>
): React.JSX.Element => <Portal data-slot="alert-dialog-portal" {...props} />
