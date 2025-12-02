import { Button } from '@components/ui/button'
import Link from 'next/link'

export function CreateJournalButton() {
  return (
    <Button asChild variant="outline" className="w-full lg:w-fit">
      <Link href="/area-restrita/revistas/cadastrar">Cadastrar Revista</Link>
    </Button>
  )
}
