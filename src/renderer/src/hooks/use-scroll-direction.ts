import { useEffect, useRef, useState } from 'react'

export const useScrollDirection = (threshold = 0): 'up' | 'down' => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  const blocking = useRef(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    prevScrollY.current = window.pageYOffset

    const updateScrollDirection = (): void => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - prevScrollY.current) >= threshold) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up'

        setScrollDirection(newScrollDirection)

        prevScrollY.current = scrollY > 0 ? scrollY : 0
      }

      blocking.current = false
    }

    const onScroll = (): void => {
      if (!blocking.current) {
        blocking.current = true
        window.requestAnimationFrame(updateScrollDirection)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDirection, threshold])

  return scrollDirection
}
