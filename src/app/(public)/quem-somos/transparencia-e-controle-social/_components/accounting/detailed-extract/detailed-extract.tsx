'use client'

import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { HighlightedLink } from '@components/ui/highlighted-link'
import { useRef } from 'react'
import { LoadingSkeleton } from './loading-skeleton'
import { useDetailedExtract } from './use-detailed-extract.hook'

export function DetailedExtractCard() {
  const { data, isLoading } = useDetailedExtract()

  const iconRef = useRef<FileTextIconHandle>(null)

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <div
      className="h-fit space-y-8 p-4"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex w-full items-center gap-4">
        <div className="rounded-full bg-primary/20 p-3">
          <FileTextIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-bold text-base md:text-lg">Extrato detalhado</h3>
      </div>
      <div>
        <HighlightedLink
          aria-label="Acessar arquivo de extrato detalhado"
          href={data?.documentUrl || '#'}
        >
          Ver arquivo detalhado
        </HighlightedLink>
      </div>
    </div>
  )
}
