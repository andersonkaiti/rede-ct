import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateRegionalCongressButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href="/area-restrita/congressos-regionais/cadastrar"
      >
        <Plus />
        Novo Congresso Regional
      </Link>
    </Button>
  )
}
