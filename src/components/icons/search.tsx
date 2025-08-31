'use client'

import { cn } from '@utils/cn'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface SearchIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface SearchIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<SearchIconHandle>
}

const SEARCH_ANIMATION_X_START = 0
const SEARCH_ANIMATION_X_MID = -3
const SEARCH_ANIMATION_Y_START = 0
const SEARCH_ANIMATION_Y_MID = -4
const SEARCH_ANIMATION_DURATION = 1
const SEARCH_ANIMATION_BOUNCE = 0.3

const searchIconVariants = {
  normal: { x: SEARCH_ANIMATION_X_START, y: SEARCH_ANIMATION_Y_START },
  animate: {
    x: [
      SEARCH_ANIMATION_X_START,
      SEARCH_ANIMATION_X_START,
      SEARCH_ANIMATION_X_MID,
      SEARCH_ANIMATION_X_START,
    ],
    y: [
      SEARCH_ANIMATION_Y_START,
      SEARCH_ANIMATION_Y_MID,
      SEARCH_ANIMATION_Y_START,
      SEARCH_ANIMATION_Y_START,
    ],
  },
}

export function SearchIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: SearchIconProps) {
  const controls = useAnimation()
  const isControlledRef = useRef(false)

  useImperativeHandle(ref, () => {
    isControlledRef.current = true

    return {
      startAnimation: () => controls.start('animate'),
      stopAnimation: () => controls.start('normal'),
    }
  })

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e)
      } else {
        controls.start('animate')
      }
    },
    [controls, onMouseEnter]
  )

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e)
      } else {
        controls.start('normal')
      }
    },
    [controls, onMouseLeave]
  )

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.svg
        animate={controls}
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transition={{
          duration: SEARCH_ANIMATION_DURATION,
          bounce: SEARCH_ANIMATION_BOUNCE,
        }}
        variants={searchIconVariants}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Search icon</title>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </motion.svg>
    </div>
  )
}
