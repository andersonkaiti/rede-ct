import { useCookiesNext } from 'cookies-next'

export function useAuth() {
  const cookies = useCookiesNext()

  const isAuthenticated = !!cookies.getCookie('token')

  return {
    isAuthenticated,
  }
}
