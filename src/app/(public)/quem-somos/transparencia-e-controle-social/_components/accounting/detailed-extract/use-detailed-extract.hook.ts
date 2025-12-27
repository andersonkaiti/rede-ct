import { getLatestFinancialTransactionStatement } from '@http/financial/financial-transaction-statement/get-latest-financial-transaction-statement'
import { useQuery } from '@tanstack/react-query'

export function useDetailedExtract() {
  return useQuery({
    queryKey: ['detailed-extract'],
    queryFn: async () => await getLatestFinancialTransactionStatement(),
  })
}
