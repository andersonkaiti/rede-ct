import { env } from '@config/env'
import { getCookie } from 'cookies-next'
import ky from 'ky'
import type { cookies } from 'next/headers'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_BASE_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        let cookieStore: typeof cookies | undefined

        if (typeof window === 'undefined') {
          const { cookies: serverCookies } = await import('next/headers')

          cookieStore = serverCookies
        }

        const token = await getCookie('token', {
          cookies: cookieStore,
        })

        if (token) {
          request.headers.set('Authorization', token)
        }
      },
    ],
  },
})
