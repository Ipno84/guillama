import { useContext } from 'react'
import { CarouselContext } from './carousel-context'
import { CarouselContextProps } from '../typings'

export const useCarousel = (): CarouselContextProps => {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}
