'use client'

import { Button } from '@components/ui/button'
import { Upload } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function CreateGalleryImageButton() {
  const { congressId } = useParams<{ congressId: string }>()

  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href={`/area-restrita/congressos-cientificos-internacionais/galeria/${congressId}/cadastrar`}
      >
        <Upload />
        Adicionar Imagem
      </Link>
    </Button>
  )
}
