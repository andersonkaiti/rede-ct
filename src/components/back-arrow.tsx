'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

interface IBackArrowProps {
  href?: string
}

export function BackArrow({ href }: IBackArrowProps) {
  const router = useRouter()

  function navigateTo() {
    if (href) {
      router.push(href)
    }

    router.back()
  }

  return (
    <Button
      className="group flex w-fit cursor-pointer items-center gap-4"
      onClick={navigateTo}
      variant="ghost"
    >
      <ArrowLeftIcon className="h-5 w-5 transition-all duration-300" />
      <div className="font-medium text-sm transition-all duration-300">
        Voltar
      </div>
    </Button>
  )
}
