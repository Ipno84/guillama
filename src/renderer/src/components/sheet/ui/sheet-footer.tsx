import { cn } from '@renderer/lib/cn'

export const SheetFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="sheet-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
)
