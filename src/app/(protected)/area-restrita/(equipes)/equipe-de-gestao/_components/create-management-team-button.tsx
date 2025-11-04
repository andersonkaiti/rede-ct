import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateManagementTeamButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer sm:w-fit"
      variant="outline"
    >
      <Link
        className="w-full sm:w-fit"
        href="/area-restrita/equipe-de-gestao/cadastrar"
      >
        <Plus />
        Nova Equipe de Gestão
      </Link>
    </Button>
  )
}
