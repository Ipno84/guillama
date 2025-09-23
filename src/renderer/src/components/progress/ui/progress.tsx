import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@renderer/lib/cn'
import { useEffect, useMemo, useRef } from 'react'

const { Root, Indicator } = ProgressPrimitive

export const Progress = ({
  className,
  value,
  ...props
}: React.ComponentProps<typeof Root>): React.JSX.Element => {
  const ref = useRef(null)
  const translateX = useMemo(() => `-${100 - (value || 0)}%`, [value])

  useEffect(() => {
    ref.current.style.setProperty('--translate-x', translateX)
  }, [translateX])

  return (
    <Root
      data-slot="progress"
      className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
      {...props}
    >
      <Indicator
        ref={ref}
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all translate-x-[var(--translate-x)]"
      />
    </Root>
  )
}
