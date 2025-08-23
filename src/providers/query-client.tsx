'use client'

import {
  QueryClientProvider as Provider,
  QueryClient,
} from '@tanstack/react-query'

export const queryClient = new QueryClient()

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider client={queryClient}>{children}</Provider>
}
