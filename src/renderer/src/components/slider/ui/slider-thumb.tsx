import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@renderer/lib/cn'

const { Thumb } = SliderPrimitive

export const SliderThumb = ({
  className,
  ...props
}: React.ComponentProps<typeof Thumb>): React.JSX.Element => (
  <Thumb
    data-slot="slider-thumb"
    className={cn(
      'border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
)
