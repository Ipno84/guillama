import { cn } from '@renderer/lib/cn'

export const DrawerFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="drawer-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
)
