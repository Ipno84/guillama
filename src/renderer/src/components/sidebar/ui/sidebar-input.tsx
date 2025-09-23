import { Input } from '@renderer/components/input'
import { cn } from '@renderer/lib/cn'

export const SidebarInput = ({
  className,
  ...props
}: React.ComponentProps<typeof Input>): React.JSX.Element => {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('bg-background h-8 w-full shadow-none', className)}
      {...props}
    />
  )
}
