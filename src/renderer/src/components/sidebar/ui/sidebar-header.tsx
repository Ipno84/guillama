import { cn } from '@renderer/lib/cn'

export const SidebarHeader = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}
