import * as DialogPrimitive from '@radix-ui/react-dialog'

const { Root } = DialogPrimitive

export const Dialog = ({ ...props }: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="dialog" {...props} />
)
