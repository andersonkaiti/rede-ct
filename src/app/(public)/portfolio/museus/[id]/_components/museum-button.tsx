'use client'

import { Button } from '@components/ui/button'
import { Globe } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

interface IMuseumButtonProps {
  url?: string | null
}

export function MuseumButton({ url }: IMuseumButtonProps) {
  return (
    <Button
      asChild
      className="group w-full"
      variant="outline"
      onClick={() => !url && toast.error('Link não disponível')}
    >
      <Link
        className="w-full"
        href={url || '#'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Globe className="size-4 transition-all duration-200 group-hover:rotate-12" />
        Visitar Site
      </Link>
    </Button>
  )
}
