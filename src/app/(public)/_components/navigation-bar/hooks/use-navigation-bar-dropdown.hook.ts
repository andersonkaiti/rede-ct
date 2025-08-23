'use client'

import { useEffect, useRef, useState } from 'react'

export function useNavigationBarDropdown() {
  const [hovering, setHovering] = useState<number | null>(null)
  const [leftOffset, setLeftOffset] = useState<number | null>(null)
  const [heightOffset, setHeightOffset] = useState<number | null>(null)

  const refs = useRef<(HTMLElement | null)[]>([])

  const VIEWPORT_PADDING = 16

  useEffect(() => {
    if (hovering !== null) {
      const menuElement = refs.current[hovering]

      if (menuElement) {
        setHeightOffset(menuElement.offsetHeight)
      }
    } else {
      setHeightOffset(0)
    }
  }, [hovering])

  function onMouseEnter(index: number, element: HTMLElement) {
    setHovering(index)

    let calculatedLeftOffset = element.offsetLeft

    const viewportWidth = window.innerWidth

    const totalOffset = calculatedLeftOffset

    if (totalOffset > viewportWidth) {
      calculatedLeftOffset = Math.max(0, viewportWidth - VIEWPORT_PADDING)
    }

    setLeftOffset(calculatedLeftOffset)
  }

  return {
    hovering,
    setHovering,
    leftOffset,
    heightOffset,
    onMouseEnter,
    refs,
  }
}
