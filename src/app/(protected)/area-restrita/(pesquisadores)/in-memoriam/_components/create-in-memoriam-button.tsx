import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateInMemoriamButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link className="w-full" href="/area-restrita/in-memoriam/cadastrar">
        <Plus />
        Novo In Memoriam
      </Link>
    </Button>
  )
}
