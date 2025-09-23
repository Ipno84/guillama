import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@renderer/lib/cn'

const { Thumb } = SwitchPrimitive

export const SwitchThumb = ({
  className,
  ...props
}: React.ComponentProps<typeof Thumb>): React.JSX.Element => {
  return (
    <Thumb
      data-slot="switch-thumb"
      className={cn(
        'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0',
        className
      )}
      {...props}
    />
  )
}
