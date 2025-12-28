import { Ban, FileCheck2, FileClock } from 'lucide-react'
import type { IRegiment } from './table/regiments-table-columns'

export const STATUS_LABEL_MAP: Record<IRegiment['status'], string> = {
  DRAFT: 'Rascunho',
  IN_FORCE: 'Em vigor',
  REVOKED: 'Revogado',
} as const

export const STATUS_ICON_MAP: Record<
  IRegiment['status'],
  { icon: React.ElementType; color: string }
> = {
  DRAFT: {
    icon: FileClock,
    color: 'text-muted-foreground',
  },
  IN_FORCE: {
    icon: FileCheck2,
    color: 'text-emerald-600',
  },
  REVOKED: {
    icon: Ban,
    color: 'text-destructive',
  },
} as const

export const STATUS_OPTIONS = [
  {
    value: 'DRAFT',
    label: 'Rascunho',
  },
  {
    value: 'IN_FORCE',
    label: 'Em vigor',
  },
  {
    value: 'REVOKED',
    label: 'Revogado',
  },
] as const
