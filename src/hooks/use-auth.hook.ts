import { useCookiesNext } from 'cookies-next'

export function useAuth() {
  const cookies = useCookiesNext()

  function isAuthenticated() {
    return !!cookies.getCookie('token')
  }

  return {
    isAuthenticated,
  }
}
