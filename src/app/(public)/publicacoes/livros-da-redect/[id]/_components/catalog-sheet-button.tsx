'use client'

import { Button } from '@components/ui/button'
import Link from 'next/link'

interface ICatalogSheetButtonProps {
  catalogSheetUrl?: string | null
}

export function CatalogSheetButton({
  catalogSheetUrl,
}: ICatalogSheetButtonProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button asChild className="w-full" variant="outline">
        <Link
          className="w-full"
          href={catalogSheetUrl || '#'}
          rel="noopener noreferrer"
        >
          Ver Ficha Catalográfica
        </Link>
      </Button>
    </div>
  )
}
