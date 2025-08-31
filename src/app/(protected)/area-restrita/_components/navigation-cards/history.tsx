'use client'

import type { BookTextIconHandle } from '@components/icons/book-text'
import { ClockIcon } from '@components/icons/clock'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function HistoryNavigationCard() {
  const iconRef = useRef<BookTextIconHandle>(null)

  return (
    <NavigationCard
      href="/area-restrita/historico-de-contribuicoes"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-orange-500/20 p-2">
          <ClockIcon className="text-orange-500" ref={iconRef} />
        </div>
        <h3 className="font-semibold text-lg">Histórico</h3>
      </div>
    </NavigationCard>
  )
}
