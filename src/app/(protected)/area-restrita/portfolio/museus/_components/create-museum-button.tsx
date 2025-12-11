import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateMuseumButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/portfolio/museus/cadastrar">
        Cadastrar Museu
      </Link>
    </Button>
  )
}
