import { Button } from '@components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface ContributionButtonProps {
  url: string
}

export function ContributionButton({ url }: ContributionButtonProps) {
  return (
    <Button asChild className="w-fit" variant="ghost">
      <Link href={url} target="_blank">
        <ExternalLink className="mr-2 size-4" />
        Visualizar Documento
      </Link>
    </Button>
  )
}
