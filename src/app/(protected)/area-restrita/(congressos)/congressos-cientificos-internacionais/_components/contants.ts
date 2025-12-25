import { Ban, CheckCircle2, Clock } from 'lucide-react'
import type { IInternationalScientificCongress } from './table/international-scientific-congresses-table-columns'

export const FORMAT_LABEL_MAP: Record<
  NonNullable<IInternationalScientificCongress['format']>,
  string
> = {
  ONLINE: 'Online',
  IN_PERSON: 'Presencial',
} as const

export const STATUS_LABEL_MAP: Record<
  NonNullable<IInternationalScientificCongress['status']>,
  string
> = {
  PENDING: 'Pendente',
  CANCELLED: 'Cancelado',
  FINISHED: 'Finalizado',
} as const

export const STATUS_ICON_MAP: Record<
  NonNullable<IInternationalScientificCongress['status']>,
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
    label: 'Cancelado',
  },
  {
    value: 'FINISHED',
    label: 'Finalizado',
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
