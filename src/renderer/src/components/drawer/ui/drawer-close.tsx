import { Drawer as DrawerPrimitive } from 'vaul'

const { Close } = DrawerPrimitive

export const DrawerClose = ({
  ...props
}: React.ComponentProps<typeof Close>): React.JSX.Element => (
  <Close data-slot="drawer-close" {...props} />
)
