import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@renderer/lib/cn'

const { Range } = SliderPrimitive

export const SliderRange = ({
  className,
  ...props
}: React.ComponentProps<typeof Range>): React.JSX.Element => (
  <Range
    data-slot="slider-range"
    className={cn(
      'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
      className
    )}
    {...props}
  />
)
