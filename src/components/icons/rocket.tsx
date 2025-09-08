'use client'

import { cn } from '@utils/cn'
import type { Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

const ROCKET_ANIMATION_DURATION_SECONDS = 6
const ROCKET_ANIMATION_X_OFFSET_1 = 0
const ROCKET_ANIMATION_X_OFFSET_2 = -3
const ROCKET_ANIMATION_X_OFFSET_3 = 2
const ROCKET_ANIMATION_X_OFFSET_4 = -2
const ROCKET_ANIMATION_X_OFFSET_5 = 1
const ROCKET_ANIMATION_X_OFFSET_6 = -1
const ROCKET_ANIMATION_X = [
  ROCKET_ANIMATION_X_OFFSET_1,
  ROCKET_ANIMATION_X_OFFSET_1,
  ROCKET_ANIMATION_X_OFFSET_2,
  ROCKET_ANIMATION_X_OFFSET_3,
  ROCKET_ANIMATION_X_OFFSET_4,
  ROCKET_ANIMATION_X_OFFSET_5,
  ROCKET_ANIMATION_X_OFFSET_6,
  ROCKET_ANIMATION_X_OFFSET_1,
]
const ROCKET_ANIMATION_Y_OFFSET_1 = 0
const ROCKET_ANIMATION_Y_OFFSET_2 = -3
const ROCKET_ANIMATION_Y_OFFSET_3 = -2
const ROCKET_ANIMATION_Y_OFFSET_4 = -1
const ROCKET_ANIMATION_Y = [
  ROCKET_ANIMATION_Y_OFFSET_1,
  ROCKET_ANIMATION_Y_OFFSET_2,
  ROCKET_ANIMATION_Y_OFFSET_1,
  ROCKET_ANIMATION_Y_OFFSET_3,
  ROCKET_ANIMATION_Y_OFFSET_2,
  ROCKET_ANIMATION_Y_OFFSET_4,
  ROCKET_ANIMATION_Y_OFFSET_3,
  ROCKET_ANIMATION_Y_OFFSET_1,
]
const ROCKET_ANIMATION_TIME_0 = 0
const ROCKET_ANIMATION_TIME_1 = 0.15
const ROCKET_ANIMATION_TIME_2 = 0.3
const ROCKET_ANIMATION_TIME_3 = 0.45
const ROCKET_ANIMATION_TIME_4 = 0.6
const ROCKET_ANIMATION_TIME_5 = 0.75
const ROCKET_ANIMATION_TIME_6 = 0.9
const ROCKET_ANIMATION_TIME_7 = 1
const ROCKET_ANIMATION_TIMES = [
  ROCKET_ANIMATION_TIME_0,
  ROCKET_ANIMATION_TIME_1,
  ROCKET_ANIMATION_TIME_2,
  ROCKET_ANIMATION_TIME_3,
  ROCKET_ANIMATION_TIME_4,
  ROCKET_ANIMATION_TIME_5,
  ROCKET_ANIMATION_TIME_6,
  ROCKET_ANIMATION_TIME_7,
]

const FIRE_ANIMATION_DURATION_SECONDS = 2
const FIRE_ANIMATION_EASE_X1 = 0.4
const FIRE_ANIMATION_EASE_X2 = 0
const FIRE_ANIMATION_EASE_X3 = 0.2
const FIRE_ANIMATION_EASE_X4 = 1
const FIRE_ANIMATION_EASE = [
  FIRE_ANIMATION_EASE_X1,
  FIRE_ANIMATION_EASE_X2,
  FIRE_ANIMATION_EASE_X3,
  FIRE_ANIMATION_EASE_X4,
]
const FIRE_ANIMATION_TIME_0 = 0
const FIRE_ANIMATION_TIME_1 = 0.2
const FIRE_ANIMATION_TIME_2 = 0.5
const FIRE_ANIMATION_TIME_3 = 0.8
const FIRE_ANIMATION_TIME_4 = 1
const FIRE_ANIMATION_TIMES = [
  FIRE_ANIMATION_TIME_0,
  FIRE_ANIMATION_TIME_1,
  FIRE_ANIMATION_TIME_2,
  FIRE_ANIMATION_TIME_3,
  FIRE_ANIMATION_TIME_4,
]

export interface RocketIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface RocketIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<RocketIconHandle>
}

const variants: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: {
    x: ROCKET_ANIMATION_X,
    y: ROCKET_ANIMATION_Y,
    transition: {
      duration: ROCKET_ANIMATION_DURATION_SECONDS,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      times: ROCKET_ANIMATION_TIMES,
    },
  },
}

const fireVariants: Variants = {
  normal: {
    d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
  },
  animate: {
    d: [
      'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
      'M4.5 16.5c-1.5 1.26-3 5.5-3 5.5s4.74-1 6-2.5c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
      'M4.5 16.5c-1.5 1.26-2.2 4.8-2.2 4.8s3.94-0.3 5.2-1.8c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
      'M4.5 16.5c-1.5 1.26-2.8 5.2-2.8 5.2s4.54-0.7 5.8-2.2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
      'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
    ],
    transition: {
      duration: FIRE_ANIMATION_DURATION_SECONDS,
      // @ts-expect-error: motion/react expects Easing or Easing[], but accepts cubic-bezier array
      ease: FIRE_ANIMATION_EASE,
      repeat: Number.POSITIVE_INFINITY,
      times: FIRE_ANIMATION_TIMES,
    },
  },
}

export function RocketIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: RocketIconProps) {
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
        variants={variants}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Rocket Icon</title>
        <motion.path
          animate={controls}
          d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
          variants={fireVariants}
        />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </motion.svg>
    </div>
  )
}
