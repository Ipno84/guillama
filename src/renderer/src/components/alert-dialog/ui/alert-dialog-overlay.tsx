import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cn } from '@renderer/lib/cn'

const { Overlay } = AlertDialogPrimitive

export const AlertDialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>): React.JSX.Element => (
  <Overlay
    data-slot="alert-dialog-overlay"
    className={cn(
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
      className
    )}
    {...props}
  />
)
