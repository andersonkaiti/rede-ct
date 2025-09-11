'use client'

import { LockIcon, type LockIconHandle } from '@components/icons/lock'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'

export function RegisteredCertificationsButton() {
  const iconRef = useRef<LockIconHandle>(null)

  return (
    <Button
      asChild
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      variant="outline"
    >
      <Link href="/area-restrita/certificados/cadastrados">
        <LockIcon ref={iconRef} />
        Certificados cadastrados
      </Link>
    </Button>
  )
}
