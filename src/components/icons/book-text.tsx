'use client'

import { cn } from '@utils/cn'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface BookTextIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface BookTextIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<BookTextIconHandle>
}

const BOOK_TEXT_ANIMATION_SCALE_START = 1
const BOOK_TEXT_ANIMATION_SCALE_PEAK = 1.04
const BOOK_TEXT_ANIMATION_SCALE_END = 1
const BOOK_TEXT_ANIMATION_SCALE = [
  BOOK_TEXT_ANIMATION_SCALE_START,
  BOOK_TEXT_ANIMATION_SCALE_PEAK,
  BOOK_TEXT_ANIMATION_SCALE_END,
]

const BOOK_TEXT_ANIMATION_ROTATE_START = 0
const BOOK_TEXT_ANIMATION_ROTATE_LEFT = -8
const BOOK_TEXT_ANIMATION_ROTATE_RIGHT = 8
const BOOK_TEXT_ANIMATION_ROTATE = [
  BOOK_TEXT_ANIMATION_ROTATE_START,
  BOOK_TEXT_ANIMATION_ROTATE_LEFT,
  BOOK_TEXT_ANIMATION_ROTATE_RIGHT,
  BOOK_TEXT_ANIMATION_ROTATE_LEFT,
  BOOK_TEXT_ANIMATION_ROTATE_START,
]

const BOOK_TEXT_ANIMATION_Y_START = 0
const BOOK_TEXT_ANIMATION_Y_PEAK = -2
const BOOK_TEXT_ANIMATION_Y_END = 0
const BOOK_TEXT_ANIMATION_Y = [
  BOOK_TEXT_ANIMATION_Y_START,
  BOOK_TEXT_ANIMATION_Y_PEAK,
  BOOK_TEXT_ANIMATION_Y_END,
]

const BOOK_TEXT_ANIMATION_DURATION = 0.6
const BOOK_TEXT_ANIMATION_EASE = 'easeInOut'
const BOOK_TEXT_ANIMATION_TIME_START = 0
const BOOK_TEXT_ANIMATION_TIME_FIRST = 0.2
const BOOK_TEXT_ANIMATION_TIME_MID = 0.5
const BOOK_TEXT_ANIMATION_TIME_LAST = 0.8
const BOOK_TEXT_ANIMATION_TIME_END = 1
const BOOK_TEXT_ANIMATION_TIMES = [
  BOOK_TEXT_ANIMATION_TIME_START,
  BOOK_TEXT_ANIMATION_TIME_FIRST,
  BOOK_TEXT_ANIMATION_TIME_MID,
  BOOK_TEXT_ANIMATION_TIME_LAST,
  BOOK_TEXT_ANIMATION_TIME_END,
]

export function BookTextIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: BookTextIconProps) {
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
        variants={{
          animate: {
            scale: BOOK_TEXT_ANIMATION_SCALE,
            rotate: BOOK_TEXT_ANIMATION_ROTATE,
            y: BOOK_TEXT_ANIMATION_Y,
            transition: {
              duration: BOOK_TEXT_ANIMATION_DURATION,
              ease: BOOK_TEXT_ANIMATION_EASE,
              times: BOOK_TEXT_ANIMATION_TIMES,
            },
          },
          normal: {
            scale: BOOK_TEXT_ANIMATION_SCALE_START,
            rotate: BOOK_TEXT_ANIMATION_ROTATE_START,
            y: BOOK_TEXT_ANIMATION_Y_START,
          },
        }}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Book text icon</title>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M8 11h8" />
        <path d="M8 7h6" />
      </motion.svg>
    </div>
  )
}
