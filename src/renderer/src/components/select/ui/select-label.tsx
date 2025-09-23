import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@renderer/lib/cn'

const { Label } = SelectPrimitive

export const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof Label>): React.JSX.Element => (
  <Label
    data-slot="select-label"
    className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
    {...props}
  />
)
