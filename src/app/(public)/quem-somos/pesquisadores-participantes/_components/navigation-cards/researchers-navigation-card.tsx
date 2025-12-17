'use client'

import { UsersIcon, type UsersIconHandle } from '@components/icons/users'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function ResearchersNavigationCard() {
  const iconRef = useRef<UsersIconHandle>(null)

  return (
    <NavigationCard
      href="/quem-somos/pesquisadores-participantes/pesquisadores"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 whitespace-normal font-bold text-xl lg:text-2xl">
          <UsersIcon className="text-primary" ref={iconRef} />
          Pesquisadores Participantes
        </h2>
        <p>
          Conheça os pesquisadores ativos que fazem parte daRedeCT e suas
          contribuições para o desenvolvimento depesquisas sobre povos
          tradicionais.
        </p>
      </div>
    </NavigationCard>
  )
}
