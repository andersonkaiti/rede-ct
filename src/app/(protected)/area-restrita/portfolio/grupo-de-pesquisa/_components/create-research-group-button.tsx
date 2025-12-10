import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateResearchGroupButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/portfolio/grupo-de-pesquisa/cadastrar">
        Cadastrar Grupo de Pesquisa
      </Link>
    </Button>
  )
}
