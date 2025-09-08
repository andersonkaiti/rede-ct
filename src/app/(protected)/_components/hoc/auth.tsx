import { isAdmin } from '@auth/auth'
import { redirect } from 'next/navigation'

export async function AuthWrapper({ children }: { children: React.ReactNode }) {
  if (!(await isAdmin())) {
    redirect('/area-restrita')
  }

  return <>{children}</>
}
