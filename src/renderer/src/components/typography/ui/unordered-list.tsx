import { cn } from '@renderer/lib/cn'

export const Ul = ({
  className,
  children,
  ...props
}: React.ComponentProps<'ul'>): React.JSX.Element => {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  )
}
