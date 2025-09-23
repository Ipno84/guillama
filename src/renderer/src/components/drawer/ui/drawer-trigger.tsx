import { Drawer as DrawerPrimitive } from 'vaul'

const { Trigger } = DrawerPrimitive

export const DrawerTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>): React.JSX.Element => (
  <Trigger data-slot="drawer-trigger" {...props} />
)
