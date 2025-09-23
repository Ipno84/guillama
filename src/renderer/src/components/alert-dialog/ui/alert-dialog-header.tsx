import { cn } from '@renderer/lib/cn'

export const AlertDialogHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="alert-dialog-header"
    className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
    {...props}
  />
)
