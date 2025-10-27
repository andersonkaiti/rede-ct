import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateEtpButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link className="w-full" href="/area-restrita/etps/cadastrar">
        <Plus />
        Novo ETP
      </Link>
    </Button>
  )
}
