'use client'

import { Button } from '@components/ui/button'
import { Share2 } from 'lucide-react'
import type { INews } from 'types/news'

interface IShareButtonProps {
  news: INews
}

export function ShareButton({ news: { title, content } }: IShareButtonProps) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title,
        text: content,
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
