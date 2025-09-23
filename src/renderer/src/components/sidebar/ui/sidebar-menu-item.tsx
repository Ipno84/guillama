import { cn } from '@renderer/lib/cn'

export const SidebarMenuItem = ({
  className,
  ...props
}: React.ComponentProps<'li'>): React.JSX.Element => {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...props}
    />
  )
}
