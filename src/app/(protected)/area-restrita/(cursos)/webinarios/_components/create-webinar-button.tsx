import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateWebinarButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/webinarios/cadastrar">
        Cadastrar Webinário
      </Link>
    </Button>
  )
}
