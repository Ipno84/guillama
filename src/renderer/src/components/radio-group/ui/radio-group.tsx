import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@renderer/lib/cn'

const { Root } = RadioGroupPrimitive

export const RadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="radio-group" className={cn('grid gap-3', className)} {...props} />
)
