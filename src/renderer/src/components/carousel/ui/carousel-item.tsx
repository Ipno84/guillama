import { cn } from '@renderer/lib/cn'
import { useCarousel } from '../context/use-carousel'

export const CarouselItem = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      {...props}
    />
  )
}
