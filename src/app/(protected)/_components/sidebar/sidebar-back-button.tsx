'use client'

import { Button } from '@components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SidebarBackButton() {
  const router = useRouter()

  return (
    <Button
      className="w-full cursor-pointer font-normal"
      onClick={() => router.replace('/')}
      variant="ghost"
    >
      <span className="mr-auto flex items-center gap-4">
        <ArrowLeft />
        Voltar
      </span>
    </Button>
  )
}
