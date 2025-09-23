import { Drawer as DrawerPrimitive } from 'vaul'

const { Root } = DrawerPrimitive

export const Drawer = ({ ...props }: React.ComponentProps<typeof Root>): React.JSX.Element => (
  <Root data-slot="drawer" {...props} />
)
