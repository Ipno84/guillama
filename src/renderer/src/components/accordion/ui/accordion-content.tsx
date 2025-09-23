import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@renderer/lib/cn'

const { Content } = AccordionPrimitive

export const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Content>): React.JSX.Element => (
  <Content
    data-slot="accordion-content"
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('pt-0 pb-4', className)}>{children}</div>
  </Content>
)
