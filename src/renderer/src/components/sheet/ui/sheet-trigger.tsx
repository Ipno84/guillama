import * as SheetPrimitive from '@radix-ui/react-dialog'

const { Trigger } = SheetPrimitive

export const SheetTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>): React.JSX.Element => (
  <Trigger data-slot="sheet-trigger" {...props} />
)
