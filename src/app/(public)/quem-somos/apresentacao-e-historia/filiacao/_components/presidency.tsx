'use client'

import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { useRef } from 'react'

export function Presidency() {
  const iconRef = useRef<UsersIconHandle>(null)

  return (
    <div
      className="flex items-center gap-4 rounded-lg bg-primary/5 p-4"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <UsersIcon className="text-primary" ref={iconRef} />

      <div>
        <p className="font-semibold">Presidente voluntária da OSCIP</p>
        <span className="text-muted-foreground">Joicileia Juliate Fonseca</span>
      </div>
    </div>
  )
}
