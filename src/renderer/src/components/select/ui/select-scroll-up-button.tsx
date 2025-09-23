import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@renderer/lib/cn'
import { ChevronUpIcon } from 'lucide-react'

const { ScrollUpButton } = SelectPrimitive

export const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollUpButton>): React.JSX.Element => (
  <ScrollUpButton
    data-slot="select-scroll-up-button"
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUpIcon className="size-4" />
  </ScrollUpButton>
)
