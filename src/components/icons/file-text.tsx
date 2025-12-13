'use client'

import { cn } from '@utils/cn'
import { motion, useAnimation } from 'motion/react'
import type React from 'react'
import type { HTMLAttributes } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

const FILE_TEXT_ICON_VIEWBOX = '0 0 24 24'
const FILE_TEXT_ICON_TITLE = 'File Text icon'

const LINE1_X1 = 8
const LINE1_X2 = 10
const LINE1_DELAY = 0.3

const LINE2_X1 = 8
const LINE2_X2 = 16
const LINE2_DELAY = 0.5

const LINE3_X1 = 8
const LINE3_X2 = 16
const LINE3_DELAY = 0.7

export interface FileTextIconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

interface FileTextIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  ref?: React.Ref<FileTextIconHandle>
}

export function FileTextIcon({
  onMouseEnter,
  onMouseLeave,
  className,
  size = 28,
  ref,
  ...props
}: FileTextIconProps) {
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
        variants={{
          normal: { scale: 1 },
          animate: {
            scale: 1.05,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
        }}
        viewBox={FILE_TEXT_ICON_VIEWBOX}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{FILE_TEXT_ICON_TITLE}</title>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />

        <motion.path
          d="M10 9H8"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            normal: {
              pathLength: 1,
              x1: LINE1_X1,
              x2: LINE1_X2,
            },
            animate: {
              pathLength: [1, 0, 1],
              x1: [LINE1_X1, LINE1_X2, LINE1_X1],
              x2: [LINE1_X2, LINE1_X2, LINE1_X2],
              transition: {
                duration: 0.7,
                delay: LINE1_DELAY,
              },
            },
          }}
        />
        <motion.path
          d="M16 13H8"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            normal: {
              pathLength: 1,
              x1: LINE2_X1,
              x2: LINE2_X2,
            },
            animate: {
              pathLength: [1, 0, 1],
              x1: [LINE2_X1, LINE2_X2, LINE2_X1],
              x2: [LINE2_X2, LINE2_X2, LINE2_X2],
              transition: {
                duration: 0.7,
                delay: LINE2_DELAY,
              },
            },
          }}
        />
        <motion.path
          d="M16 17H8"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            normal: {
              pathLength: 1,
              x1: LINE3_X1,
              x2: LINE3_X2,
            },
            animate: {
              pathLength: [1, 0, 1],
              x1: [LINE3_X1, LINE3_X2, LINE3_X1],
              x2: [LINE3_X2, LINE3_X2, LINE3_X2],
              transition: {
                duration: 0.7,
                delay: LINE3_DELAY,
              },
            },
          }}
        />
      </motion.svg>
    </div>
  )
}
