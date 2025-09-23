import * as SheetPrimitive from '@radix-ui/react-dialog'

const { Close } = SheetPrimitive

export const SheetClose = ({ ...props }: React.ComponentProps<typeof Close>): React.JSX.Element => (
  <Close data-slot="sheet-close" {...props} />
)
