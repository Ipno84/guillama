import * as SelectPrimitive from '@radix-ui/react-select'

const { Portal } = SelectPrimitive

export const SelectPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>): React.JSX.Element => (
  <Portal data-slot="select-portal" {...props} />
)
