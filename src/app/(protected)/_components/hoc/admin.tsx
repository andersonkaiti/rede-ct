import { checkIsAdmin } from '@auth/auth'
import { redirect } from 'next/navigation'
import type React from 'react'
import type { JSX } from 'react'

export function AdminHOC<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  return async function AdminComponent(props: P) {
    const isAdmin = await checkIsAdmin()

    if (!isAdmin) {
      redirect('/area-restrita')
    }

    return <Component {...props} />
  }
}
