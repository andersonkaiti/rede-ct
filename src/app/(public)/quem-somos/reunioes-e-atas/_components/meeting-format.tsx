import { Badge } from '@components/ui/badge'
import { MapPin, MonitorPlay } from 'lucide-react'
import type { JSX } from 'react'

type MeetingFormat = 'ONLINE' | 'IN_PERSON'

export const formatConfig: Record<
  MeetingFormat,
  { label: string; icon: JSX.Element }
> = {
  ONLINE: {
    label: 'Virtual',
    icon: <MonitorPlay className="size-4" />,
  },
  IN_PERSON: {
    label: 'Presencial',
    icon: <MapPin className="size-4" />,
  },
}

export function MeetingFormat({ format }: { format: MeetingFormat }) {
  const formatInfo = formatConfig[format]

  return (
    <Badge variant="outline" className="flex items-center gap-1">
      {formatInfo.icon}
      {formatInfo.label}
    </Badge>
  )
}
