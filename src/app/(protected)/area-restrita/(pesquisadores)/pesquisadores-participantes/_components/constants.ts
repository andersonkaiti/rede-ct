export const DEGREE_OPTIONS = [
  {
    label: 'Doutorado',
    value: 'DOCTOR',
  },
  {
    label: 'Mestrado',
    value: 'MASTER',
  },
  {
    label: 'Bacharelado',
    value: 'BACHELOR',
  },
  {
    label: 'Técnico',
    value: 'TECHNICAL',
  },
  {
    label: 'Pós-graduação',
    value: 'POSTGRADUATE',
  },
]

export const DEGREE_LABEL_MAP: Record<string, string> = {
  DOCTOR: 'Doutor',
  MASTER: 'Mestre',
  BACHELOR: 'Bacharel',
  TECHNICAL: 'Técnico',
  POSTGRADUATE: 'Pós-graduação',
} as const

export const SENIORITY_OPTIONS = [
  {
    label: 'Sênior',
    value: 'SENIOR',
  },
  {
    label: 'Pesquisador',
    value: 'RESEARCHER',
  },
  {
    label: 'Júnior',
    value: 'JUNIOR',
  },
  {
    label: 'Membro honorário',
    value: 'HONOR',
  },
] as const

export const SENIORITY_LABEL_MAP: Record<string, string> = {
  SENIOR: 'Sênior',
  RESEARCHER: 'Pesquisador',
  JUNIOR: 'Júnior',
  HONOR: 'Honorário',
} as const
