import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@renderer/lib/cn'
import { ChevronDownIcon } from 'lucide-react'

const { ScrollDownButton } = SelectPrimitive

export const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof ScrollDownButton>): React.JSX.Element => (
  <ScrollDownButton
    data-slot="select-scroll-down-button"
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDownIcon className="size-4" />
  </ScrollDownButton>
)
