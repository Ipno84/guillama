import { cn } from '@renderer/lib/cn'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { buttonVariants } from '@renderer/components/button'

const { Action } = AlertDialogPrimitive

export const AlertDialogAction = ({
  className,
  ...props
}: React.ComponentProps<typeof Action>): React.JSX.Element => (
  <Action className={cn(buttonVariants(), className)} {...props} />
)
