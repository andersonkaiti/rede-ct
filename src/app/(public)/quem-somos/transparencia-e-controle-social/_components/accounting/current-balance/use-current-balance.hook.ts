import { getLatestCheckingAccountByType } from '@http/financial/checking-account/get-latest-checking-account-by-type'
import { useQuery } from '@tanstack/react-query'

export function useCurrentBalance() {
  return useQuery({
    queryKey: ['current-balance'],
    queryFn: async () =>
      await getLatestCheckingAccountByType('EXCLUSIVE_REDECT_USE'),
  })
}
