import { Button } from '@components/ui/button'
import Link from 'next/link'

interface IPartnerButtonProps {
  websiteUrl?: string
}

export function PartnerButton({ websiteUrl }: IPartnerButtonProps) {
  return (
    <Button asChild variant="outline" className="w-full">
      <Link href={websiteUrl || '#'} target="_blank" rel="noopener noreferrer">
        <span>Acessar página</span>
      </Link>
    </Button>
  )
}
