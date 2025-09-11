'use client'

import {
  DownloadIcon,
  type DownloadIconHandle,
} from '@components/icons/download'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { useRef } from 'react'

export function CertificationButton({ url }: { url: string }) {
  const iconRef = useRef<DownloadIconHandle>(null)

  return (
    <Button
      asChild
      className="w-full"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      variant="ghost"
    >
      <Link href={url} target="_blank">
        <DownloadIcon ref={iconRef} />
        Baixar certificado
      </Link>
    </Button>
  )
}
