import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateProgramButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/pos-graduacoes/cadastrar">
        Cadastrar Programa
      </Link>
    </Button>
  )
}
