'use client'

import { cn } from '@utils/cn'
import type { Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface LinkIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface LinkIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<LinkIconHandle>
}

const PATH_LENGTH_START = 1
const PATH_LENGTH_MID = 0.97
const PATH_OFFSET_START = 0
const PATH_OFFSET_MID = 0.05
const ROTATE_START = 0
const ROTATE_MID = -5
const TRANSITION_DURATION = 1
const ROTATE_DURATION = 0.5
const TIMES_1 = 0
const TIMES_2 = 0.2
const TIMES_3 = 0.4
const TIMES_4 = 0.6
const TIMES_5 = 1

const pathVariants: Variants = {
  initial: {
    pathLength: PATH_LENGTH_START,
    pathOffset: PATH_OFFSET_START,
    rotate: ROTATE_START,
  },
  animate: {
    pathLength: [
      PATH_LENGTH_START,
      PATH_LENGTH_MID,
      PATH_LENGTH_START,
      PATH_LENGTH_MID,
      PATH_LENGTH_START,
    ],
    pathOffset: [
      PATH_OFFSET_START,
      PATH_OFFSET_MID,
      PATH_OFFSET_START,
      PATH_OFFSET_MID,
      PATH_OFFSET_START,
    ],
    rotate: [ROTATE_START, ROTATE_MID, ROTATE_START],
    transition: {
      rotate: {
        duration: ROTATE_DURATION,
      },
      duration: TRANSITION_DURATION,
      times: [TIMES_1, TIMES_2, TIMES_3, TIMES_4, TIMES_5],
      ease: 'easeInOut',
    },
  },
}

export function LinkIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: LinkIconProps) {
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
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Link icon</title>
        <motion.path
          animate={controls}
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          variants={pathVariants}
        />
        <motion.path
          animate={controls}
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          variants={pathVariants}
        />
      </svg>
    </div>
  )
}
