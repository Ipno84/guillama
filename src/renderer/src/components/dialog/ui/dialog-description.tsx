import { cn } from '@renderer/lib/cn'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const { Description } = DialogPrimitive

export const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>): React.JSX.Element => (
  <Description
    data-slot="dialog-description"
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
)
