'use client'

import { motion } from 'motion/react'

export type SpotlightIntensity = 'LOW' | 'MEDIUM' | 'HIGH'

type SpotlightProps = {
  intensity?: SpotlightIntensity
  gradientFirst?: string
  gradientSecond?: string
  gradientThird?: string
  translateY?: number
  width?: number
  height?: number
  smallWidth?: number
  duration?: number
  xOffset?: number
}

const INTENSITY_CONFIG = {
  LOW: {
    first: { start: 0.07, middle: 0.02, end: 0 },
    second: { start: 0.055, middle: 0.02, end: 0 },
    third: { start: 0.04, middle: 0.015, end: 0 },
  },
  MEDIUM: {
    first: { start: 0.14, middle: 0.04, end: 0 },
    second: { start: 0.11, middle: 0.04, end: 0 },
    third: { start: 0.08, middle: 0.03, end: 0 },
  },
  HIGH: {
    first: { start: 0.28, middle: 0.08, end: 0 },
    second: { start: 0.22, middle: 0.08, end: 0 },
    third: { start: 0.16, middle: 0.06, end: 0 },
  },
} as const

export function Spotlight({
  intensity = 'MEDIUM',
  gradientFirst,
  gradientSecond,
  gradientThird,
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) {
  const config = INTENSITY_CONFIG[intensity]

  const defaultGradientFirst = `radial-gradient(68.54% 68.72% at 55.02% 31.46%, oklch(0.637 0.237 25.331 / ${config.first.start}) 0, oklch(0.637 0.237 25.331 / ${config.first.middle}) 50%, oklch(0.637 0.237 25.331 / ${config.first.end}) 80%)`
  const defaultGradientSecond = `radial-gradient(50% 50% at 50% 50%, oklch(0.637 0.237 25.331 / ${config.second.start}) 0, oklch(0.637 0.237 25.331 / ${config.second.middle}) 80%, transparent 100%)`
  const defaultGradientThird = `radial-gradient(50% 50% at 50% 50%, oklch(0.637 0.237 25.331 / ${config.third.start}) 0, oklch(0.637 0.237 25.331 / ${config.third.middle}) 80%, transparent 100%)`
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst ?? defaultGradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0`}
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(5%, -50%)',
            background: gradientSecond ?? defaultGradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(-180%, -70%)',
            background: gradientThird ?? defaultGradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute top-0 right-0 z-40 h-screen w-screen"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst ?? defaultGradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0`}
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(-5%, -50%)',
            background: gradientSecond ?? defaultGradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(180%, -70%)',
            background: gradientThird ?? defaultGradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  )
}
