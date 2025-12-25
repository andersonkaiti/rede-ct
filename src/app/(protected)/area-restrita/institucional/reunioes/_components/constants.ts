import { Ban, CheckCircle2, Clock } from 'lucide-react'
import type { IMeeting } from './table/meetings-table-columns'

export const FORMAT_LABEL_MAP: Record<IMeeting['format'], string> = {
  ONLINE: 'Online',
  IN_PERSON: 'Presencial',
} as const

export const STATUS_LABEL_MAP: Record<IMeeting['status'], string> = {
  PENDING: 'Pendente',
  CANCELLED: 'Cancelada',
  FINISHED: 'Finalizada',
} as const

export const STATUS_ICON_MAP: Record<
  IMeeting['status'],
  { icon: React.ElementType; color: string }
> = {
  PENDING: {
    icon: Clock,
    color: 'text-yellow-500',
  },
  CANCELLED: {
    icon: Ban,
    color: 'text-destructive',
  },
  FINISHED: {
    icon: CheckCircle2,
    color: 'text-emerald-600',
  },
} as const

export const STATUS_OPTIONS = [
  {
    value: 'PENDING',
    label: 'Pendente',
  },
  {
    value: 'CANCELLED',
    label: 'Cancelada',
  },
  {
    value: 'FINISHED',
    label: 'Finalizada',
  },
] as const

export const FORMAT_OPTIONS = [
  {
    value: 'ONLINE',
    label: 'Online',
  },
  {
    value: 'IN_PERSON',
    label: 'Presencial',
  },
] as const
