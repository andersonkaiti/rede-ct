'use client'

import { MapPinIcon, type MapPinIconHandle } from '@components/icons/map-pin'
import { Badge } from '@components/ui/badge'
import { useRef } from 'react'

interface ICountryProps {
  country: string
}

export function Country({ country }: ICountryProps) {
  const iconRef = useRef<MapPinIconHandle>(null)

  return (
    <Badge
      className="flex w-full flex-col items-center gap-0.5 rounded-md border border-primary/20 bg-primary/10 p-2 font-semibold text-primary"
      key={country}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <MapPinIcon ref={iconRef} />
      {country}
    </Badge>
  )
}
