import { cn } from '@renderer/lib/cn'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

const { Title } = AlertDialogPrimitive

export const AlertDialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>): React.JSX.Element => (
  <Title
    data-slot="alert-dialog-title"
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
)
