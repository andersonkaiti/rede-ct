'use client'

import { cn } from '@utils/cn'
import type { Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes, Ref } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface IdCardIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface IdCardIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: Ref<IdCardIconHandle>
}

const ANIMATION_DURATION = 0.3
const ANIMATION_DELAY_STEP = 0.1

const idCardVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: ANIMATION_DURATION,
      delay: custom * ANIMATION_DELAY_STEP,
    },
  }),
}

export function IdCardIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: IdCardIconProps) {
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
        <title>Id card icon</title>
        <motion.path
          animate={controls}
          custom={2}
          d="M16 10h2"
          variants={idCardVariants}
        />
        <motion.path
          animate={controls}
          custom={2}
          d="M16 14h2"
          variants={idCardVariants}
        />
        <motion.path
          animate={controls}
          custom={0}
          d="M6.17 15a3 3 0 0 1 5.66 0"
          variants={idCardVariants}
        />
        <motion.circle
          animate={controls}
          custom={1}
          cx="9"
          cy="11"
          r="2"
          variants={idCardVariants}
        />
        <rect height="14" rx="2" width="20" x="2" y="5" />
      </svg>
    </div>
  )
}
