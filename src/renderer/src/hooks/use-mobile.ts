import { useCallback, useEffect, useState } from 'react'

export const useIsMobile = (mobileScreenSize = 768): boolean => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(`(max-width: ${mobileScreenSize}px)`).matches
  )

  const checkIsMobile = useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches)
  }, [])

  useEffect(() => {
    const mediaListener = window.matchMedia(`(max-width: ${mobileScreenSize}px)`)

    mediaListener.addEventListener('change', checkIsMobile)

    return () => {
      mediaListener.removeEventListener('change', checkIsMobile)
    }
  }, [checkIsMobile, mobileScreenSize])

  return isMobile
}
