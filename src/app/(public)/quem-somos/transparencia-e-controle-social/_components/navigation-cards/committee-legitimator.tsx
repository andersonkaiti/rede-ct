'use client'

import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { NavigationCard } from '@components/ui/navigation-card'
import { useRef } from 'react'

export function CommitteeLegitimator() {
  const iconRef = useRef<FileTextIconHandle>(null)

  return (
    <NavigationCard
      href="/quem-somos/transparencia-e-controle-social/comite-legitimador"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="rounded-full bg-primary/20 p-2">
        <FileTextIcon className="text-primary" ref={iconRef} />
      </div>
      <h2 className="whitespace-normal font-bold text-xl lg:text-2xl">
        Comitê Legitimador
      </h2>
    </NavigationCard>
  )
}
