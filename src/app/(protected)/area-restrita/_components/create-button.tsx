import { Button } from '@components/ui/button'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export function CreateButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Button
      asChild
      className="w-full cursor-pointer sm:w-fit"
      variant="outline"
    >
      <Link href={href}>
        <PlusIcon />
        {children}
      </Link>
    </Button>
  )
}
