import { cn } from '@renderer/lib/cn'
import { Drawer as DrawerPrimitive } from 'vaul'

const { Description } = DrawerPrimitive

export const DrawerDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>): React.JSX.Element => (
  <Description
    data-slot="drawer-description"
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
)
