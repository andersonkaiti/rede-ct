'use client'

import { LinkIcon } from '@components/icons/link'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'

interface IMeetingButtonProps {
  meetingLink: string
}

export function MeetingButton({ meetingLink }: IMeetingButtonProps) {
  return (
    <Button
      className="w-full"
      asChild
      variant="outline"
      onClick={() => meetingLink && toast.error('Link indisponível')}
    >
      <Link href={meetingLink} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
        Acessar reunião
      </Link>
    </Button>
  )
}
