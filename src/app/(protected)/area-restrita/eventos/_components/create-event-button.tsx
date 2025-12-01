import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateEventButton() {
  return (
    <Link href="/area-restrita/eventos/cadastrar">
      <Button variant="outline">Cadastrar evento</Button>
    </Link>
  )
}
