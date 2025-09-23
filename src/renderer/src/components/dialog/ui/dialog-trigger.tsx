import * as DialogPrimitive from '@radix-ui/react-dialog'

const { Trigger } = DialogPrimitive

export const DialogTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>): React.JSX.Element => (
  <Trigger data-slot="dialog-trigger" {...props} />
)
