import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '@renderer/lib/cn'
import { ScrollBar } from './scroll-bar'

const { Root, Viewport, Corner } = ScrollAreaPrimitive

export const ScrollArea = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): React.JSX.Element => {
  return (
    <Root data-slot="scroll-area" className={cn('relative', className)} {...props}>
      <Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  )
}
