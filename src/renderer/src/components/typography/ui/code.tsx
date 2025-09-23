import { cn } from '@renderer/lib/cn'

export const Code = ({
  className,
  children,
  ...props
}: React.ComponentProps<'code'>): React.JSX.Element => {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}
