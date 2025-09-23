import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const { Trigger } = AlertDialogPrimitive

export const AlertDialogTrigger = (
  props: React.ComponentProps<typeof Trigger>
): React.JSX.Element => <Trigger data-slot="alert-dialog-trigger" {...props} />
