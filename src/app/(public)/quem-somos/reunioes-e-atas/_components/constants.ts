export const STATUS_OPTIONS = [
  {
    label: 'Todos',
    value: 'ALL',
  },
  {
    label: 'Pendente',
    value: 'PENDING',
  },
  {
    label: 'Cancelada',
    value: 'CANCELLED',
  },
  {
    label: 'Finalizada',
    value: 'FINISHED',
  },
] as const

export type StatusValue = (typeof STATUS_OPTIONS)[number]['value']

export const FORMAT_OPTIONS = [
  {
    label: 'Todos',
    value: 'ALL',
  },
  {
    label: 'Online',
    value: 'ONLINE',
  },
  {
    label: 'Presencial',
    value: 'IN_PERSON',
  },
] as const

export type FormatValue = (typeof FORMAT_OPTIONS)[number]['value']
