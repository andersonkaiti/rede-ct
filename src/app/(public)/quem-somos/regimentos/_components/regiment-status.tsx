import { Badge } from '@components/ui/badge'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface IRegimentStatus {
  status: string
}

type RegimentStatus = 'DRAFT' | 'IN_FORCE' | 'REVOKED'

const statusConfig: Record<
  RegimentStatus,
  {
    label: string
    icon: typeof AlertCircle
    badgeClass: string
    ariaLabel: string
  }
> = {
  DRAFT: {
    label: 'Rascunho',
    icon: AlertCircle,
    badgeClass:
      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    ariaLabel: 'Status: Rascunho',
  },
  IN_FORCE: {
    label: 'Em Vigor',
    icon: CheckCircle,
    badgeClass:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ariaLabel: 'Status: Em Vigor',
  },
  REVOKED: {
    label: 'Revogado',
    icon: AlertCircle,
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ariaLabel: 'Status: Revogado',
  },
}

export function RegimentStatus({ status }: IRegimentStatus) {
  const config = statusConfig[status as RegimentStatus]
  const StatusIcon = config.icon

  return (
    <Badge
      className={`flex items-center gap-1.5 ${config.badgeClass} whitespace-nowrap`}
      aria-label={config.ariaLabel}
      variant="outline"
    >
      <StatusIcon className="size-3.5" aria-hidden="true" />
      <span>{config.label}</span>
    </Badge>
  )
}
