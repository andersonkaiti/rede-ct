'use client'

import { HeartIcon, type HeartIconHandle } from '@components/icons/heart'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function InMemoriamNavigationCard() {
  const iconRef = useRef<HeartIconHandle>(null)

  return (
    <NavigationCard
      href="/quem-somos/pesquisadores-participantes/in-memoriam"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex flex-col gap-4">
        <h2 className="title-3 flex items-center gap-2 font-bold">
          <HeartIcon className="text-primary" ref={iconRef} /> Galeria in
          memorian
        </h2>
        <p>
          Homenageamos aqueles que deixaram sua contribuição e legado junto à
          RedeCT, tanto pesquisadores quanto líderes de povos tradicionais.
        </p>
      </div>
    </NavigationCard>
  )
}
