'use client'

import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function SDHCTeamNavigationCard() {
  const iconRef = useRef<FileTextIconHandle>(null)

  return (
    <NavigationCard
      href="/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais/equipe-sdhc"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-primary/20 p-2">
            <FileTextIcon className="text-primary" ref={iconRef} />
          </div>
          <h2 className="whitespace-normal font-bold text-xl lg:text-2xl">
            Conheça nossa equipe de gestão
          </h2>
        </div>
        <p>
          Descubra os membros da atual equipe de gestão da associação Social
          Desenvolvimento Humano e Comunitário.
        </p>
      </div>
    </NavigationCard>
  )
}
