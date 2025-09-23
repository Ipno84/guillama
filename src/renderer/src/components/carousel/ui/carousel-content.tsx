import { cn } from '@renderer/lib/cn'
import { useCarousel } from '../context/use-carousel'

export const CarouselContent = ({
  className,
  ...props
}: React.ComponentProps<'div'>): React.JSX.Element => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  )
}
