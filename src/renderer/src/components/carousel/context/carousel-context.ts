import { createContext } from 'react'
import { CarouselContextProps } from '../typings'

export const CarouselContext = createContext<CarouselContextProps | null>(null)
