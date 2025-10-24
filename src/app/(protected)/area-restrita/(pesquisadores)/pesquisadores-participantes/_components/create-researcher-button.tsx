import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateResearcherButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href="/area-restrita/pesquisadores-participantes/cadastrar"
      >
        <Plus />
        Novo pesquisador
      </Link>
    </Button>
  )
}
