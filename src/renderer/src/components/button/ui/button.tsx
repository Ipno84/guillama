import { Slot } from '@radix-ui/react-slot'
import { buttonVariants, type ButtonVariants } from './button.style'
import { cn } from '@renderer/lib/cn'

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  ButtonVariants & {
    asChild?: boolean
  }): React.JSX.Element => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
