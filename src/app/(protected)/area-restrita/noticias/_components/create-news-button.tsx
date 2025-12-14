import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateNewsButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full lg:w-fit"
        href="/area-restrita/noticias/cadastrar"
      >
        <Plus />
        Nova Notícia
      </Link>
    </Button>
  )
}
