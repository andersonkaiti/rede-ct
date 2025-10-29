import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreatePartnerButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href="/area-restrita/parceiros-e-financiadores/cadastrar"
      >
        <Plus />
        Novo parceiro
      </Link>
    </Button>
  )
}
