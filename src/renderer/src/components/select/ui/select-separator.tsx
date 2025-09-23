import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@renderer/lib/cn'

const { Separator } = SelectPrimitive

export const SelectSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>): React.JSX.Element => (
  <Separator
    data-slot="select-separator"
    className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
    {...props}
  />
)
