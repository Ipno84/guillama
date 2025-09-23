import { cn } from '@renderer/lib/cn'

export const CommandShortcut = ({
  className,
  ...props
}: React.ComponentProps<'span'>): React.JSX.Element => (
  <span
    data-slot="command-shortcut"
    className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
    {...props}
  />
)
