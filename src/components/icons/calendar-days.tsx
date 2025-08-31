'use client'

import { cn } from '@utils/cn'
import type { Variants } from 'motion/react'
import { AnimatePresence, motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface CalendarDaysIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface CalendarDaysIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<CalendarDaysIconHandle>
}

const DOTS = [
  { cx: 8, cy: 14 },
  { cx: 12, cy: 14 },
  { cx: 16, cy: 14 },
  { cx: 8, cy: 18 },
  { cx: 12, cy: 18 },
  { cx: 16, cy: 18 },
]

const CALENDAR_DAYS_ANIMATION_OPACITY_START = 1
const CALENDAR_DAYS_ANIMATION_OPACITY_MID = 0.3
const CALENDAR_DAYS_ANIMATION_OPACITY_END = 1
const CALENDAR_DAYS_ANIMATION_DELAY_STEP = 0.1
const CALENDAR_DAYS_ANIMATION_DURATION = 0.4
const CALENDAR_DAYS_ANIMATION_TIME_START = 0
const CALENDAR_DAYS_ANIMATION_TIME_MID = 0.5
const CALENDAR_DAYS_ANIMATION_TIME_END = 1

const variants: Variants = {
  normal: {
    opacity: CALENDAR_DAYS_ANIMATION_OPACITY_START,
    transition: {
      duration: 0.2,
    },
  },
  animate: (i: number) => ({
    opacity: [
      CALENDAR_DAYS_ANIMATION_OPACITY_START,
      CALENDAR_DAYS_ANIMATION_OPACITY_MID,
      CALENDAR_DAYS_ANIMATION_OPACITY_END,
    ],
    transition: {
      delay: i * CALENDAR_DAYS_ANIMATION_DELAY_STEP,
      duration: CALENDAR_DAYS_ANIMATION_DURATION,
      times: [
        CALENDAR_DAYS_ANIMATION_TIME_START,
        CALENDAR_DAYS_ANIMATION_TIME_MID,
        CALENDAR_DAYS_ANIMATION_TIME_END,
      ],
    },
  }),
}

export function CalendarDaysIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: CalendarDaysIconProps) {
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
        <title>Calendar days icon</title>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect height="18" rx="2" width="18" x="3" y="4" />
        <path d="M3 10h18" />
        <AnimatePresence>
          {DOTS.map((dot, index) => (
            <motion.circle
              animate={controls}
              custom={index}
              cx={dot.cx}
              cy={dot.cy}
              fill="currentColor"
              initial="normal"
              key={`${dot.cx}-${dot.cy}`}
              r="1"
              stroke="none"
              variants={variants}
            />
          ))}
        </AnimatePresence>
      </svg>
    </div>
  )
}
