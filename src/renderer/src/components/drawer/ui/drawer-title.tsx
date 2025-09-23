import { cn } from '@renderer/lib/cn'
import { Drawer as DrawerPrimitive } from 'vaul'

const { Title } = DrawerPrimitive

export const DrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>): React.JSX.Element => (
  <Title
    data-slot="drawer-title"
    className={cn('text-foreground font-semibold', className)}
    {...props}
  />
)
