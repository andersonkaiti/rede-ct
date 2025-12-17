'use client'

import { Button } from '@components/ui/button'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function CreatePartnerButton() {
  const { congressId } = useParams<{ congressId: string }>()

  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href={`/area-restrita/congressos-cientificos-internacionais/parceiros/${congressId}/cadastrar`}
      >
        <UserPlus />
        Adicionar Parceiro
      </Link>
    </Button>
  )
}
