'use client'

import type { BookTextIconHandle } from '@components/icons/book-text'
import { SparklesIcon } from '@components/icons/sparkles'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function CertificationsNavigationCard() {
  const iconRef = useRef<BookTextIconHandle>(null)

  return (
    <NavigationCard
      href="/area-restrita/certificados"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-green-500/20 p-2">
          <SparklesIcon className="text-green-500" ref={iconRef} />
        </div>
        <h3 className="font-semibold text-lg">Certificados</h3>
      </div>
    </NavigationCard>
  )
}
