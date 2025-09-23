import { cn } from '@renderer/lib/cn'

export const Large = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  )
}
