import { Badge } from '@components/ui/badge'
import { MapPin, MonitorPlay } from 'lucide-react'
import type { JSX } from 'react'

type EventFormat = 'ONLINE' | 'IN_PERSON'

export const formatConfig: Record<
  EventFormat,
  { label: string; icon: JSX.Element }
> = {
  ONLINE: {
    label: 'Online',
    icon: <MonitorPlay className="size-4" />,
  },
  IN_PERSON: {
    label: 'Presencial',
    icon: <MapPin className="size-4" />,
  },
}

export function EventFormat({ format }: { format: EventFormat }) {
  const formatInfo = formatConfig[format]

  return (
    <Badge
      variant="outline"
      className="flex items-center gap-1 rounded-full px-4"
    >
      {formatInfo.icon}
      {formatInfo.label}
    </Badge>
  )
}
