import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@renderer/lib/cn'

const { Item } = AccordionPrimitive

export const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof Item>): React.JSX.Element => (
  <Item
    data-slot="accordion-item"
    className={cn('border-b last:border-b-0', className)}
    {...props}
  />
)
