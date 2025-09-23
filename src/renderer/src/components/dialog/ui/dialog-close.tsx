import * as DialogPrimitive from '@radix-ui/react-dialog'

const { Close } = DialogPrimitive

export const DialogClose = ({
  ...props
}: React.ComponentProps<typeof Close>): React.JSX.Element => (
  <Close data-slot="dialog-close" {...props} />
)
