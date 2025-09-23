import { cn } from '@renderer/lib/cn'

export const H1 = ({
  className,
  children,
  ...props
}: React.ComponentProps<'h1'>): React.JSX.Element => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
