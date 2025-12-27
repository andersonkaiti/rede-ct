import { getTotalBalance } from '@http/financial/checking-account/get-total-balance'
import { useQuery } from '@tanstack/react-query'

export function useTotalBalance() {
  return useQuery({
    queryKey: ['total-balance'],
    queryFn: async () => await getTotalBalance(),
  })
}
