import { Separator } from '@renderer/components/separator'
import { cn } from '@renderer/lib/cn'

export const SidebarSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof Separator>): React.JSX.Element => {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  )
}
