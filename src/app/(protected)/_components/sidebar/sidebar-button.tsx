'use client'

import { SidebarMenuButton } from '@components/ui/sidebar'
import { usePathname } from 'next/navigation'

interface ISidebarButtonProps {
  path: string
  children: React.ReactNode
}

export function SidebarButton({ path, children }: ISidebarButtonProps) {
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <SidebarMenuButton
      asChild
      className="flex gap-2 hover:bg-secondary"
      isActive={isActive}
    >
      {children}
    </SidebarMenuButton>
  )
}
