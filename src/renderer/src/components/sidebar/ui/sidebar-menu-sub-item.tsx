import { cn } from '@renderer/lib/cn'

export const SidebarMenuSubItem = ({
  className,
  ...props
}: React.ComponentProps<'li'>): React.JSX.Element => {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...props}
    />
  )
}
