'use client'

import {
  FileTextIcon,
  type FileTextIconHandle,
} from '@components/icons/file-text'
import { Card, CardFooter, CardHeader } from '@components/ui/card'
import { HighlightedLink } from '@components/ui/highlighted-link'
import { useRef } from 'react'

export function DetailedExtractCard() {
  const iconRef = useRef<FileTextIconHandle>(null)

  return (
    <Card
      className="h-fit"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <CardHeader className="flex w-full items-center gap-4">
        <div className="rounded-full bg-primary/20 p-3">
          <FileTextIcon className="text-primary" ref={iconRef} />
        </div>
        <h3 className="font-bold text-base md:text-lg">Extrato detalhado</h3>
      </CardHeader>
      <CardFooter>
        <HighlightedLink
          aria-label="Acessar arquivo de extrato detalhado"
          href="#"
        >
          Ver arquivo detalhado
        </HighlightedLink>
      </CardFooter>
    </Card>
  )
}
