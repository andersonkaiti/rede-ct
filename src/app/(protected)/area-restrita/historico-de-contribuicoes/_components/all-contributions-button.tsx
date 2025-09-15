'use client'

import { LockIcon, type LockIconHandle } from '@components/icons/lock'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'

export function AllContributionsButton() {
  const iconRef = useRef<LockIconHandle>(null)

  return (
    <Button
      asChild
      className="w-full lg:w-fit"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      variant="outline"
    >
      <Link href="/area-restrita/historico-de-contribuicoes/geral">
        <LockIcon className="mr-2 size-4" ref={iconRef} />
        Todas as contribuições
      </Link>
    </Button>
  )
}
