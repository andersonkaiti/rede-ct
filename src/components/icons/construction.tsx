'use client'

import { cn } from '@utils/cn'
import { motion } from 'motion/react'
import type { HTMLAttributes } from 'react'

export interface ConstructionIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface ConstructionIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<ConstructionIconHandle>
}

const STRIPES_ANIMATION_DISTANCE = 6
const STRIPES_ANIMATION_DURATION = 1
const STRIPES_HEIGHT = 14
const STRIPES_WIDTH = 6

export function ConstructionIcon({
  className,
  size = 28,
  ref,
  ...props
}: ConstructionIconProps) {
  // Animação contínua: sempre animando, sem controle externo
  return (
    <div className={cn(className)} {...props}>
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
        <title>Construction icon</title>
        <defs>
          <motion.pattern
            animate={{
              x: [0, STRIPES_ANIMATION_DISTANCE],
              transition: {
                duration: STRIPES_ANIMATION_DURATION,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
              },
            }}
            height={STRIPES_HEIGHT}
            id="stripes"
            patternUnits="userSpaceOnUse"
            width={STRIPES_WIDTH}
          >
            <path d="M-4 -2 L14 30" stroke="currentColor" strokeWidth="2" />
          </motion.pattern>
        </defs>
        <rect fill="url(#stripes)" height="8" rx="1" width="20" x="2" y="6" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
      </svg>
    </div>
  )
}
