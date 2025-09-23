import { cn } from '@renderer/lib/cn'

export const SheetHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div data-slot="sheet-header" className={cn('flex flex-col gap-1.5 p-4', className)} {...props} />
)
