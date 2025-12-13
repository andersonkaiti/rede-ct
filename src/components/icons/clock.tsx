'use client'

import { cn } from '@utils/cn'
import type { Transition, Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface ClockIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface ClockIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<ClockIconHandle>
}

const HAND_ANIMATION_DURATION = 0.6
const CUBIC_BEZIER_CONTROL_POINT_1 = 0.4
const CUBIC_BEZIER_CONTROL_POINT_2 = 0
const CUBIC_BEZIER_CONTROL_POINT_3 = 0.2
const CUBIC_BEZIER_CONTROL_POINT_4 = 1
const HAND_ANIMATION_EASE: Transition['ease'] = [
  CUBIC_BEZIER_CONTROL_POINT_1,
  CUBIC_BEZIER_CONTROL_POINT_2,
  CUBIC_BEZIER_CONTROL_POINT_3,
  CUBIC_BEZIER_CONTROL_POINT_4,
]
const MINUTE_HAND_ANIMATION_DURATION = 0.5
const MINUTE_HAND_ANIMATION_EASE: Transition['ease'] = 'easeInOut'

const handTransition: Transition = {
  duration: HAND_ANIMATION_DURATION,
  ease: HAND_ANIMATION_EASE,
}

const handVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '0%',
    originY: '100%',
  },
  animate: {
    rotate: 360,
    originX: '0%',
    originY: '100%',
  },
}

const minuteHandTransition: Transition = {
  duration: MINUTE_HAND_ANIMATION_DURATION,
  ease: MINUTE_HAND_ANIMATION_EASE,
}

const minuteHandVariants: Variants = {
  normal: {
    rotate: 0,
    originX: '0%',
    originY: '100%',
  },
  animate: {
    rotate: 45,
    originX: '0%',
    originY: '100%',
  },
}

export function ClockIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: ClockIconProps) {
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
        <title>Clock icon</title>
        <circle cx="12" cy="12" r="10" />
        <motion.line
          animate={controls}
          initial="normal"
          transition={handTransition}
          variants={handVariants}
          x1="12"
          x2="12"
          y1="12"
          y2="6"
        />
        <motion.line
          animate={controls}
          initial="normal"
          transition={minuteHandTransition}
          variants={minuteHandVariants}
          x1="12"
          x2="16"
          y1="12"
          y2="12"
        />
      </svg>
    </div>
  )
}
