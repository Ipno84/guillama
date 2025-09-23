import { cn } from '@renderer/lib/cn'

export const Blockquote = ({
  className,
  children,
  ...props
}: React.ComponentProps<'blockquote'>): React.JSX.Element => {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props}>
      {children}
    </blockquote>
  )
}
