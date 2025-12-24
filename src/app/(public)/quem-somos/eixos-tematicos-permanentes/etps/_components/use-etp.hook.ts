import { getEtps } from '@http/etps/get-etps'
import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

export function useETPs() {
  const [filter] = useQueryState('filter')

  const { data, ...rest } = useQuery({
    queryKey: ['etps'],
    queryFn: async () => await getEtps({}),
  })

  const filteredETPs = data?.etps.filter((etp) =>
    filter
      ? Object.entries(etp).some(
          ([, value]) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(filter.toLowerCase()),
        )
      : true,
  )

  return {
    etps: filteredETPs,
    ...rest,
  }
}
