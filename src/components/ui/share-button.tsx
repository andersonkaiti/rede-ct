'use client'

import { Button } from '@components/ui/button'
import { Share2 } from 'lucide-react'

interface IShareButtonProps {
  title: string
  text: string
}

export function ShareButton({ title, text }: IShareButtonProps) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href,
      })
    }
  }

  return (
    <Button onClick={handleShare} variant="ghost">
      <Share2 className="size-4" />
      Compartilhar
    </Button>
  )
}
