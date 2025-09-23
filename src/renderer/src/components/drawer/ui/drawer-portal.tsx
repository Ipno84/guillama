import { Drawer as DrawerPrimitive } from 'vaul'

const { Portal } = DrawerPrimitive

export const DrawerPortal = ({
  ...props
}: React.ComponentProps<typeof Portal>): React.JSX.Element => (
  <Portal data-slot="drawer-portal" {...props} />
)
