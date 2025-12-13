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
  const [{ tab = seniorities[0], filtro: filter }, setQueryStates] =
    useQueryStates({
      tab: parseAsString.withDefault(seniorities[0]),
      filtro: parseAsString.withDefault(''),
    })

  const result = useQuery({
    queryKey: ['researchers', filter],
    queryFn: async () =>
      await getResearchers({
        filter,
      }),
  })

  const currentTab: Seniority | undefined = seniorities.includes(
    tab as Seniority,
  )
    ? (tab as Seniority)
    : undefined

  return {
    currentTab,
    setTab: (value: string) =>
      setQueryStates((prevState) => ({
        ...prevState,
        tab: value,
      })),
    ...result,
  }
}
