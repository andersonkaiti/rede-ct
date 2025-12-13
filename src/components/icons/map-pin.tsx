'use client'

import { cn } from '@utils/cn'
import type { Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface MapPinIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface MapPinIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<MapPinIconHandle>
}

const PIN_ANIMATION_Y_START = 0
const PIN_ANIMATION_Y_MID = -5
const PIN_ANIMATION_Y_END = -3
const PIN_ANIMATION_DURATION = 0.5
const PIN_ANIMATION_TIME_START = 0
const PIN_ANIMATION_TIME_MID = 0.6
const PIN_ANIMATION_TIME_END = 1
const PIN_ANIMATION_TIMES = [
  PIN_ANIMATION_TIME_START,
  PIN_ANIMATION_TIME_MID,
  PIN_ANIMATION_TIME_END,
]

const CIRCLE_ANIMATION_OPACITY_START = 0
const CIRCLE_ANIMATION_OPACITY_END = 1
const CIRCLE_ANIMATION_PATH_LENGTH_START = 0
const CIRCLE_ANIMATION_PATH_LENGTH_END = 1
const CIRCLE_ANIMATION_PATH_OFFSET_START = 0.5
const CIRCLE_ANIMATION_PATH_OFFSET_END = 0
const CIRCLE_ANIMATION_DELAY = 0.3
const CIRCLE_ANIMATION_DURATION = 0.5
const CIRCLE_ANIMATION_OPACITY_DURATION = 0.1

const svgVariants: Variants = {
  normal: {
    y: PIN_ANIMATION_Y_START,
  },
  animate: {
    y: [PIN_ANIMATION_Y_START, PIN_ANIMATION_Y_MID, PIN_ANIMATION_Y_END],
    transition: {
      duration: PIN_ANIMATION_DURATION,
      times: PIN_ANIMATION_TIMES,
    },
  },
}

const circleVariants: Variants = {
  normal: {
    opacity: CIRCLE_ANIMATION_OPACITY_END,
  },
  animate: {
    opacity: [CIRCLE_ANIMATION_OPACITY_START, CIRCLE_ANIMATION_OPACITY_END],
    pathLength: [
      CIRCLE_ANIMATION_PATH_LENGTH_START,
      CIRCLE_ANIMATION_PATH_LENGTH_END,
    ],
    pathOffset: [
      CIRCLE_ANIMATION_PATH_OFFSET_START,
      CIRCLE_ANIMATION_PATH_OFFSET_END,
    ],
    transition: {
      delay: CIRCLE_ANIMATION_DELAY,
      duration: CIRCLE_ANIMATION_DURATION,
      opacity: {
        duration: CIRCLE_ANIMATION_OPACITY_DURATION,
        delay: CIRCLE_ANIMATION_DELAY,
      },
    },
  },
}

export function MapPinIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: MapPinIconProps) {
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
    [controls, onMouseEnter],
  )

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e)
      } else {
        controls.start('normal')
      }
    },
    [controls, onMouseLeave],
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
        initial="normal"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={svgVariants}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Map pin icon</title>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <motion.circle
          animate={controls}
          cx="12"
          cy="10"
          initial="normal"
          r="3"
          variants={circleVariants}
        />
      </motion.svg>
    </div>
  )
}
