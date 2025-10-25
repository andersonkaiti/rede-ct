'use client'

import { HeartIcon, type HeartIconHandle } from '@components/icons/heart'
import { Badge } from '@components/ui/badge'
import { useRef } from 'react'

export function GaleriaInMemoriamTitle() {
  const iconRef = useRef<HeartIconHandle | null>(null)

  return (
    <h1
      className="mx-auto flex items-center gap-2 text-center font-semibold text-3xl"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <Badge className="rounded-full bg-primary/20 py-2 text-primary">
        <HeartIcon className="!size-7 fill-primary" ref={iconRef} />
      </Badge>
      Galeria in memoriam
    </h1>
  )
}
