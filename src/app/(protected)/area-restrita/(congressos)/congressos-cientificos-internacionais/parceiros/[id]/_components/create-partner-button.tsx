'use client'

import { Button } from '@components/ui/button'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function CreatePartnerButton() {
  const { id } = useParams<{ id: string }>()

  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href={`/area-restrita/congressos-cientificos-internacionais/parceiros/${id}/cadastrar`}
      >
        <UserPlus />
        Adicionar Parceiro
      </Link>
    </Button>
  )
}
