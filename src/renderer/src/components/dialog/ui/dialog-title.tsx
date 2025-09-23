import { cn } from '@renderer/lib/cn'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const { Title } = DialogPrimitive

export const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>): React.JSX.Element => (
  <Title
    data-slot="dialog-title"
    className={cn('text-lg leading-none font-semibold', className)}
    {...props}
  />
)
