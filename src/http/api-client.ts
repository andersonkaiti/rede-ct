import { env } from '@config/env'
import { deleteCookie, getCookie } from 'cookies-next'
import ky from 'ky'
import type { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import z from 'zod'

const UNAUTHORIZED_STATUS_CODE = 401
const UNAUTHORIZED_MESSAGE = 'Token inválido.'

const isAdminResponseSchema = z.object({
  message: z.string(),
})

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
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === UNAUTHORIZED_STATUS_CODE) {
          const data = await response.json()

          const { message } = isAdminResponseSchema.parse(data)

          if (message === UNAUTHORIZED_MESSAGE) {
            deleteCookie('token', {
              path: '/',
            })

            redirect('/sign-in')
          }
        }
      },
    ],
  },
})
