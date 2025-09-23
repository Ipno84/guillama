import { cn } from '@renderer/lib/cn'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const { Description } = AlertDialogPrimitive

export const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>): React.JSX.Element => (
  <Description
    data-slot="alert-dialog-description"
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
)
