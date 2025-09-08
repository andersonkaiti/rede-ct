import type { LucideIcon } from 'lucide-react'

export interface NavigationLink {
  label: string
  path?: string
  icon?: LucideIcon
  isProtected?: boolean
  children?: NavigationLink[]
}
