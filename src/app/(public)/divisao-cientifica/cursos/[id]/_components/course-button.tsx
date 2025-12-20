'use client'

import { Button } from '@components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

interface ICourseButtonProps {
  registrationLink?: string | null
}

export function CourseButton({ registrationLink }: ICourseButtonProps) {
  return (
    <Button
      asChild
      className="group w-full font-bold"
      variant="outline"
      onClick={() => !registrationLink && toast.error('Link não disponível')}
    >
      <Link
        className="w-full"
        href={registrationLink || '#'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="size-4 transition-all duration-200 group-hover:translate-x-1" />
        Acessar Inscrição
      </Link>
    </Button>
  )
}
