import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const { Root } = AlertDialogPrimitive

export const AlertDialog = (props: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="alert-dialog" {...props} />
)
