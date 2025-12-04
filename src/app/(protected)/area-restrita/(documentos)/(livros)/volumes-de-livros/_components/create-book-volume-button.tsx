import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateBookVolumeButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/capitulos-de-livros/cadastrar">
        Cadastrar Volume
      </Link>
    </Button>
  )
}
