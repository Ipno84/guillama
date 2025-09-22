import { cn } from '@renderer/lib/cn'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { buttonVariants } from '@renderer/components/button'

const { Cancel } = AlertDialogPrimitive

export const AlertDialogCancel = ({
  className,
  ...props
}: React.ComponentProps<typeof Cancel>): React.JSX.Element => (
  <Cancel className={cn(buttonVariants({ variant: 'outline' }), className)} {...props} />
)
