import { Button } from '@components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface PendencyButtonProps {
  url: string
}

export function PendencyButton({ url }: PendencyButtonProps) {
  return (
    <Button asChild className="w-fit" variant="ghost">
      <Link href={url} rel="noopener noreferrer" target="_blank">
        <ExternalLink className="mr-2 size-4" />
        Visualizar Documento
      </Link>
    </Button>
  )
}
