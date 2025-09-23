import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@renderer/lib/cn'

const { Track } = SliderPrimitive

export const SliderTrack = ({
  className,
  ...props
}: React.ComponentProps<typeof Track>): React.JSX.Element => (
  <Track
    data-slot="slider-track"
    className={cn(
      'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
      className
    )}
    {...props}
  />
)
