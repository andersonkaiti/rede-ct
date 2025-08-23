'use client'

import { useEffect, useRef, useState } from 'react'

const DESKTOP_BREAKPOINT = 1300

export function useNavigationBar() {
  const [showNavigationBar, setShowNavigationBar] = useState(false)
  const navigationBarRef = useRef<HTMLElement>(null)

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setShowNavigationBar(false)
        setActiveIndex(null)
      }
    }

    window.addEventListener('resize', closeOnResize)

    return () => {
      window.removeEventListener('resize', closeOnResize)
    }
  }, [])

  return {
    showNavigationBar,
    setShowNavigationBar,
    navigationBarRef,
    activeIndex,
    setActiveIndex,
  }
}
