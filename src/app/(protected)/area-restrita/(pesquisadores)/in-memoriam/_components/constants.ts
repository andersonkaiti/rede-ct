export const ROLE_OPTIONS = [
  {
    label: 'Pesquisador',
    value: 'RESEARCHER',
  },
  {
    label: 'Líder',
    value: 'LEADER',
  },
] as const

export const ROLE_LABEL_MAP: Record<string, string> = {
  RESEARCHER: 'Pesquisador',
  LEADER: 'Líder',
} as const
