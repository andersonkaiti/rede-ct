import { Button } from '@components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateMeetingButton() {
  return (
    <Button
      asChild
      className="w-full cursor-pointer lg:w-fit"
      variant="outline"
    >
      <Link
        className="w-full"
        href="/area-restrita/congressos-cientificos-internacionais/cadastrar"
      >
        <Plus />
        Novo Congresso Científico Internacional
      </Link>
    </Button>
  )
}
