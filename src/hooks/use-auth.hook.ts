import { isAdmin } from '@http/auth/is-admin'
import { useQuery } from '@tanstack/react-query'
import { useCookiesNext } from 'cookies-next'

export function useAuth() {
  const cookies = useCookiesNext()

  function isAuthenticated() {
    return !!cookies.getCookie('token')
  }

  const { data: isAdminData = false } = useQuery({
    queryKey: ['isAdmin'],
    queryFn: isAdmin,
    enabled: isAuthenticated(),
  })

  return {
    isAuthenticated,
    isAdmin: () => isAdminData,
  }
}
