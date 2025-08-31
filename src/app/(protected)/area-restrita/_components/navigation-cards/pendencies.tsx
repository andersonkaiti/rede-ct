'use client'

import type { BookTextIconHandle } from '@components/icons/book-text'
import { HandCoinsIcon } from '@components/icons/hand-coins'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function PendenciesNavigationCard() {
  const iconRef = useRef<BookTextIconHandle>(null)

  return (
    <NavigationCard
      href="/area-restrita/pendencias"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-primary/20 p-2">
          <HandCoinsIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-semibold text-lg">Pendências</h3>
      </div>
    </NavigationCard>
  )
}
