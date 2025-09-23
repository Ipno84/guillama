import * as SliderPrimitive from '@radix-ui/react-slider'
import { SliderTrack } from './slider-track'
import { SliderRange } from './slider-range'
import { cn } from '@renderer/lib/cn'
import { useMemo } from 'react'

const { Root } = SliderPrimitive

export const Slider = ({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof Root>): React.JSX.Element => {
  const _values = useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  )

  return (
    <Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.SliderThumb key={index} />
      ))}
    </Root>
  )
}
