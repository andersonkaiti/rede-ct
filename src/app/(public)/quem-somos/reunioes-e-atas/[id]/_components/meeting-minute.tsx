import { Button } from '@components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { formatDate } from '@utils/format-date'
import { FileText } from 'lucide-react'
import Link from 'next/link'

interface IMeetingMinuteProps {
  meeting: {
    minutes: {
      title: string
      publishedAt: Date
      documentUrl: string
    }
  }
}

export function MeetingMinute({ meeting }: IMeetingMinuteProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center gap-4 text-sm md:w-fit"
        >
          <span className="relative flex size-5 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
            <FileText className="relative inline-flex size-4 text-primary" />
          </span>
          <span>Visualizar ata</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="space-y-4 p-4">
        <div className="space-y-2">
          <p>{meeting.minutes.title}</p>

          <p>Publicada em {formatDate(meeting.minutes.publishedAt)}</p>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link
            href={meeting.minutes.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar Ata
          </Link>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
