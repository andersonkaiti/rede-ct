'use client'

import { Button } from '@components/ui/button'
import { Play } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

interface IWebinarButtonProps {
  webinarLink?: string | null
}

export function WebinarButton({ webinarLink }: IWebinarButtonProps) {
  return (
    <Button
      asChild
      className="group w-full font-bold"
      variant="outline"
      onClick={() => !webinarLink && toast.error('Link não disponível')}
    >
      <Link
        className="w-full"
        href={webinarLink || '#'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Play className="size-4 transition-all duration-200 group-hover:translate-x-1" />
        Acessar Webinário
      </Link>
    </Button>
  )
}
