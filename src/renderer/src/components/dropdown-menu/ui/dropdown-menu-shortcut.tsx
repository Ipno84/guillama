import { cn } from '@renderer/lib/cn'

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'> & {
  inset?: boolean
}): React.JSX.Element => (
  <span
    data-slot="dropdown-menu-shortcut"
    className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
    {...props}
  />
)
