import { getResearchers } from '@http/researchers/get-researchers'
import { useQuery } from '@tanstack/react-query'
import { parseAsString, useQueryStates } from 'nuqs'

export const seniorities = ['SENIOR', 'RESEARCHER', 'JUNIOR', 'HONOR'] as const

export type Seniority = (typeof seniorities)[number]

export const seniorityMapping: Record<Seniority, string> = {
  SENIOR: 'Pesquisador(a) Sênior',
  JUNIOR: 'Pesquisador(a) Júnior',
  RESEARCHER: 'Pesquisador(a)',
  HONOR: 'Membro Honorário',
}

export function useResearchers() {
  const [{ nome, tab = seniorities[0] }, setQueryStates] = useQueryStates({
    nome: parseAsString.withDefault(''),
    tab: parseAsString.withDefault(seniorities[0]),
  })

  const { data, isLoading } = useQuery({
    queryKey: ['researchers'],
    queryFn: async () => await getResearchers({}),
  })

  const currentTab: Seniority | undefined = seniorities.includes(
    tab as Seniority
  )
    ? (tab as Seniority)
    : undefined

  const filteredByName = data?.researchers?.filter((researcher) =>
    nome
      ? researcher.user.name.toLowerCase().includes(nome.toLowerCase())
      : true
  )

  return {
    currentTab,
    setTab: (value: string) =>
      setQueryStates((prevState) => ({
        ...prevState,
        tab: value,
      })),
    filteredByName,
    isLoading,
  }
}
