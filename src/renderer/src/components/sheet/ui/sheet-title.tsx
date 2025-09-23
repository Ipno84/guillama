import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cn } from '@renderer/lib/cn'

const { Title } = SheetPrimitive

export const SheetTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>): React.JSX.Element => (
  <Title
    data-slot="sheet-title"
    className={cn('text-foreground font-semibold', className)}
    {...props}
  />
)
