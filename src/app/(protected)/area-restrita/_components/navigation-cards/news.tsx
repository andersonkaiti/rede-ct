'use client'

import {
  BookTextIcon,
  type BookTextIconHandle,
} from '@components/icons/book-text'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function NewsNavigationCard() {
  const iconRef = useRef<BookTextIconHandle>(null)

  return (
    <NavigationCard
      href="/area-restrita/noticias"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-indigo-500/20 p-2">
          <BookTextIcon className="text-indigo-500" ref={iconRef} />
        </div>
        <h3 className="font-semibold text-lg">Notícias</h3>
      </div>
    </NavigationCard>
  )
}
