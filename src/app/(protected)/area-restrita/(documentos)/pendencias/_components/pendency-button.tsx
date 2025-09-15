import { Button } from '@components/ui/button'
import { ExternalLink } from 'lucide-react'

interface PendencyButtonProps {
  url: string
}

export function PendencyButton({ url }: PendencyButtonProps) {
  return (
    <Button asChild className="w-full" variant="ghost">
      <a href={url} rel="noopener noreferrer" target="_blank">
        <ExternalLink className="mr-2 size-4" />
        Visualizar Documento
      </a>
    </Button>
  )
}
