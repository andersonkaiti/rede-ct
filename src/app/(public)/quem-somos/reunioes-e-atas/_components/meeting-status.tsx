import { Badge } from '@components/ui/badge'
import { cn } from '@utils/cn'
import { AlertCircle, CheckCircle } from 'lucide-react'

type MeetingStatus = 'PENDING' | 'CANCELLED' | 'FINISHED'

export const statusConfig: Record<
  MeetingStatus,
  {
    label: string
    icon: typeof AlertCircle
    badgeClass: string
    ariaLabel: string
  }
> = {
  PENDING: {
    label: 'Agendada',
    icon: AlertCircle,
    badgeClass:
      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    ariaLabel: 'Status: Agendada',
  },
  FINISHED: {
    label: 'Finalizada',
    icon: CheckCircle,
    badgeClass:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ariaLabel: 'Status: Finalizada',
  },
  CANCELLED: {
    label: 'Cancelada',
    icon: AlertCircle,
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ariaLabel: 'Status: Cancelada',
  },
}

export function MeetingStatus({ status }: { status: MeetingStatus }) {
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
