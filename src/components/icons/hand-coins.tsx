'use client'

import { cn } from '@utils/cn'
import type { Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface HandCoinsIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface HandCoinsIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<HandCoinsIconHandle>
}

const ANIMATION_TRANSLATE_Y = -20
const ANIMATION_OPACITY = [0, 1]
const ANIMATION_DURATION = 0.2
const ANIMATION_STIFFNESS = 150
const ANIMATION_DAMPING = 15
const ANIMATION_BOUNCE = 0.8
const SECOND_CIRCLE_DELAY = 0.15

const circleVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: ANIMATION_DURATION },
      type: 'spring',
      stiffness: ANIMATION_STIFFNESS,
      damping: ANIMATION_DAMPING,
      bounce: ANIMATION_BOUNCE,
    },
  },
  animate: {
    opacity: ANIMATION_OPACITY,
    translateY: [ANIMATION_TRANSLATE_Y, 0],
    transition: {
      opacity: { duration: ANIMATION_DURATION },
      type: 'spring',
      stiffness: ANIMATION_STIFFNESS,
      damping: ANIMATION_DAMPING,
      bounce: ANIMATION_BOUNCE,
    },
  },
}

const secondCircleVariants: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
    transition: {
      opacity: { duration: ANIMATION_DURATION },
      delay: SECOND_CIRCLE_DELAY,
      type: 'spring',
      stiffness: ANIMATION_STIFFNESS,
      damping: ANIMATION_DAMPING,
      bounce: ANIMATION_BOUNCE,
    },
  },
  animate: {
    opacity: ANIMATION_OPACITY,
    translateY: [ANIMATION_TRANSLATE_Y, 0],
    transition: {
      opacity: { duration: ANIMATION_DURATION },
      delay: SECOND_CIRCLE_DELAY,
      type: 'spring',
      stiffness: ANIMATION_STIFFNESS,
      damping: ANIMATION_DAMPING,
      bounce: ANIMATION_BOUNCE,
    },
  },
}

export function HandCoinsIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: HandCoinsIconProps) {
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
        <title>Mão segurando moedas</title>
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
        <path d="m2 16 6 6" />
        <motion.circle
          animate={controls}
          cx="16"
          cy="9"
          r="2.9"
          variants={circleVariants}
        />
        <motion.circle
          animate={controls}
          cx="6"
          cy="5"
          r="3"
          variants={secondCircleVariants}
        />
      </svg>
    </div>
  )
}
