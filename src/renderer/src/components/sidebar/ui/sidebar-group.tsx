import { cn } from '@renderer/lib/cn'

export const SidebarGroup = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}
