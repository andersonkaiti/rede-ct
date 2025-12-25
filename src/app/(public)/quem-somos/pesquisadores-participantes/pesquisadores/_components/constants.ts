export const DEGREE_LABEL_MAP: Record<string, string> = {
  DOCTOR: 'Doutor(a)',
  MASTER: 'Mestre(a)',
  BACHELOR: 'Bacharel',
  TECHNICAL: 'Técnico(a)',
  POSTGRADUATE: 'Pós-graduação',
} as const

export const seniorities = ['SENIOR', 'RESEARCHER', 'JUNIOR', 'HONOR'] as const

export type Seniority = (typeof seniorities)[number]

export const SENIORITY_LABEL_MAP: Record<Seniority, string> = {
  SENIOR: 'Pesquisador(a) Sênior',
  JUNIOR: 'Pesquisador(a) Júnior',
  RESEARCHER: 'Pesquisador(a)',
  HONOR: 'Membro Honorário',
} as const

export type SeniorityValue = Seniority | 'ALL'

export const SENIORITY_OPTIONS: Array<{
  value: SeniorityValue
  label: string
}> = [
  {
    value: 'ALL',
    label: 'Todos',
  },
  {
    value: 'SENIOR',
    label: SENIORITY_LABEL_MAP.SENIOR,
  },
  {
    value: 'RESEARCHER',
    label: SENIORITY_LABEL_MAP.RESEARCHER,
  },
  {
    value: 'JUNIOR',
    label: SENIORITY_LABEL_MAP.JUNIOR,
  },
  {
    value: 'HONOR',
    label: SENIORITY_LABEL_MAP.HONOR,
  },
]
