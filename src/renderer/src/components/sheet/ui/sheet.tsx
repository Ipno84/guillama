import * as SheetPrimitive from '@radix-ui/react-dialog'

const { Root } = SheetPrimitive

export const Sheet = ({ ...props }: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="sheet" {...props} />
)
