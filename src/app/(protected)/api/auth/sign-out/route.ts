'use server'

import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cookieStore = await cookies()

  cookieStore.delete({
    name: 'token',
    path: '/',
  })

  return NextResponse.redirect(new URL('/sign-in', request.url))
}
