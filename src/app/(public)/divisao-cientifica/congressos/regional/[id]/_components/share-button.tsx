'use client'

import { Button } from '@components/ui/button'
import { Share2 } from 'lucide-react'

interface IShareButtonProps {
  congress: {
    title: string
  }
}

export function ShareButton({ congress: { title } }: IShareButtonProps) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title,
        text: title,
        url: window.location.href,
      })
    }
  }

  return (
    <Button onClick={handleShare} variant="ghost" className="w-full md:w-fit">
      <Share2 className="size-4" />
      Compartilhar
    </Button>
  )
}
