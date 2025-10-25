export const ROLE_OPTIONS = [
  { label: 'Pesquisador', value: 'RESEARCHER' },
  { label: 'Líder', value: 'LEADER' },
]

export const ROLE_LABEL_MAP: Record<string, string> = {
  RESEARCHER: 'Pesquisador',
  LEADER: 'Líder',
}

export function getRoleLabel(value: string): string {
  return ROLE_LABEL_MAP[value] || value
}
