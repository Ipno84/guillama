import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cn } from '@renderer/lib/cn'

const { Description } = SheetPrimitive

export const SheetDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>): React.JSX.Element => (
  <Description
    data-slot="sheet-description"
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
)
