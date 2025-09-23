import { cn } from '@renderer/lib/cn'

export const SidebarGroupContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  )
}
