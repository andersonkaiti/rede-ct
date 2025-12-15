import { getUsers } from '@http/users/get-users'
import { useQuery } from '@tanstack/react-query'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => await getUsers({}),
  })
}
