'use client'

import type { BookTextIconHandle } from '@components/icons/book-text'
import { UsersIcon } from '@components/icons/users'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function TeamsNavigationCard() {
  const iconRef = useRef<BookTextIconHandle>(null)

  return (
    <NavigationCard
      href="/area-restrita/equipes"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-purple-500/20 p-2">
          <UsersIcon className="text-purple-500" ref={iconRef} />
        </div>
        <h3 className="font-semibold text-lg">Equipes</h3>
      </div>
    </NavigationCard>
  )
}
