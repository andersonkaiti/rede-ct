export const SENIORITY_OPTIONS = [
  { label: 'Sênior', value: 'SENIOR' },
  { label: 'Pesquisador', value: 'RESEARCHER' },
  { label: 'Júnior', value: 'JUNIOR' },
  { label: 'Membro honorário', value: 'HONOR' },
]

export const SENIORITY_LABEL_MAP: Record<string, string> = {
  SENIOR: 'Sênior',
  RESEARCHER: 'Pesquisador',
  JUNIOR: 'Júnior',
  HONOR: 'Honorário',
}

export function getSeniorityLabel(value: string): string {
  return SENIORITY_LABEL_MAP[value] || value
}
