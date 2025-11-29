'use client'

import { Button } from '@components/ui/button'
import { ImagePlus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function CreateGalleryImageButton() {
  const { id } = useParams<{ id: string }>()

  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href={`/area-restrita/congressos-regionais/galeria/${id}/cadastrar`}
      >
        <ImagePlus />
        Adicionar Imagem
      </Link>
    </Button>
  )
}
