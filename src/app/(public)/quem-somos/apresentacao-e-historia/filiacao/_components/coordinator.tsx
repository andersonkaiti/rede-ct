'use client'

import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { useRef } from 'react'

export function Coordinator() {
  const iconRef = useRef<UsersIconHandle>(null)

  return (
    <div
      className="flex items-center gap-4 rounded-lg bg-primary/5 p-4"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <UsersIcon className="text-primary" ref={iconRef} />

      <div>
        <p className="font-semibold">Coordenador voluntário da RedeCT</p>
        <span className="text-muted-foreground">
          Prof. Dr. Nelson Russo de Moraes
        </span>
      </div>
    </div>
  )
}
