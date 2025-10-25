'use client'

import { EarthIcon, type EarthIconHandle } from '@components/icons/earth'
import { Badge } from '@components/ui/badge'
import { useRef } from 'react'

export function TraditionalLeadersTitle() {
  const iconRef = useRef<EarthIconHandle | null>(null)

  return (
    <h2
      className="flex items-center gap-4 font-semibold text-2xl"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <Badge className="rounded-full bg-primary/20 p-1 text-primary">
        <EarthIcon ref={iconRef} />
      </Badge>
      Povos Tradicionais
    </h2>
  )
}
