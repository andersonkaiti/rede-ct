import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateRedeCTHighlightButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/portfolio/destaques-da-redect/cadastrar">
        Cadastrar Destaque
      </Link>
    </Button>
  )
}
