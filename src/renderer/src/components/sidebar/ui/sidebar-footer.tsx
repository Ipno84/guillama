import { cn } from '@renderer/lib/cn'

export const SidebarFooter = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}
