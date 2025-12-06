import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateArticleButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/artigos/cadastrar">Cadastrar Artigo</Link>
    </Button>
  )
}
