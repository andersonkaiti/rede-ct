import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateAccountButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href="/area-restrita/financeiro/conta-corrente/cadastrar"
      >
        <Plus />
        Nova Conta
      </Link>
    </Button>
  )
}
