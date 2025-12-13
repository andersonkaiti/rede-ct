'use client'

import { cn } from '@utils/cn'
import type { Transition, Variants } from 'motion/react'
import { motion, useAnimation } from 'motion/react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

export interface WorkflowIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface WorkflowIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<WorkflowIconHandle>
}

const WORKFLOW_ANIMATION_DELAY_UNIT = 0.1
const WORKFLOW_ANIMATION_DURATION = 0.3
const WORKFLOW_ANIMATION_OPACITY_DELAY = 0.15

const transition: Transition = {
  duration: WORKFLOW_ANIMATION_DURATION,
  opacity: { delay: WORKFLOW_ANIMATION_OPACITY_DELAY },
}

const variants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      ...transition,
      delay: WORKFLOW_ANIMATION_DELAY_UNIT * custom,
    },
  }),
}

export function WorkflowIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: WorkflowIconProps) {
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
        <title>Workflow icon</title>
        <motion.rect
          animate={controls}
          custom={0}
          height="8"
          rx="2"
          variants={variants}
          width="8"
          x="3"
          y="3"
        />
        <motion.path
          animate={controls}
          custom={3}
          d="M7 11v4a2 2 0 0 0 2 2h4"
          variants={variants}
        />
        <motion.rect
          animate={controls}
          custom={0}
          height="8"
          rx="2"
          variants={variants}
          width="8"
          x="13"
          y="13"
        />
      </svg>
    </div>
  )
}
