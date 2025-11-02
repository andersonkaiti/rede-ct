'use client'

import { Button } from '@components/ui/button'
import { Share2 } from 'lucide-react'

interface IShareButtonProps {
  news: {
    id: string
    createdAt: string
    updatedAt: string
    title: string
    content: string
    imageUrl: string | null
    author: {
      name: string
      id: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'ADMIN' | 'USER'
    }
  }
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
