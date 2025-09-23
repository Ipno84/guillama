import { cn } from '@renderer/lib/cn'

export const DrawerHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => (
  <div
    data-slot="drawer-header"
    className={cn(
      'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
      className
    )}
    {...props}
  />
)
