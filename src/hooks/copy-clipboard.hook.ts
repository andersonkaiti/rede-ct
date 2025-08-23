'use client'

import { useState } from 'react'
import { toast } from 'sonner'

const COPY_TIMEOUT_MS = 1000

export function useCopyClipboard(children: string) {
  const [isCopied, setIsCopied] = useState(false)

  function copyToClipboard() {
    navigator.clipboard.writeText(children as string)

    setIsCopied(true)

    toast('Copiado para a área de transferência!')

    setTimeout(() => {
      setIsCopied(false)
    }, COPY_TIMEOUT_MS)
  }

  return {
    copyToClipboard,
    isCopied,
  }
}
