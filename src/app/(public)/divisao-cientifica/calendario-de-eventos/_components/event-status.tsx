import { Badge } from '@components/ui/badge'
import { cn } from '@utils/cn'
import { AlertCircle, CheckCircle } from 'lucide-react'

type EventStatus = 'PENDING' | 'CANCELLED' | 'FINISHED'

export const statusConfig: Record<
  EventStatus,
  {
    label: string
    icon: typeof AlertCircle
    badgeClass: string
    ariaLabel: string
  }
> = {
  PENDING: {
    label: 'Inscrições Abertas',
    icon: AlertCircle,
    badgeClass:
      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    ariaLabel: 'Status: Inscrições Abertas',
  },
  FINISHED: {
    label: 'Encerrado',
    icon: CheckCircle,
    badgeClass:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ariaLabel: 'Status: Encerrado',
  },
  CANCELLED: {
    label: 'Cancelado',
    icon: AlertCircle,
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ariaLabel: 'Status: Cancelado',
  },
}

export function EventStatus({ status }: { status: EventStatus }) {
  const statusInfo = statusConfig[status]

  return (
    <Badge
      className={cn(
        'flex items-center gap-1 rounded-full px-3 font-medium text-xs',
        statusInfo.badgeClass,
      )}
      aria-label={statusInfo.ariaLabel}
    >
      <statusInfo.icon className="size-4" />
      {statusInfo.label}
    </Badge>
  )
}
