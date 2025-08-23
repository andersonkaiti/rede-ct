'use client'

import { useCopyClipboard } from '@hooks/copy-clipboard.hook'
import { cn } from '@utils/cn'
import { Check, Copy as CopyIcon } from 'lucide-react'

interface ICopyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode
}

export function Copy({ children, className, ...props }: ICopyProps) {
  const { copyToClipboard, isCopied } = useCopyClipboard(children as string)

  return (
    <button
      className={cn('cursor-pointer', className)}
      onClick={copyToClipboard}
      type="button"
    >
      {children}
      {isCopied ? (
        <Check className="ml-2 inline h-4 w-4" />
      ) : (
        <CopyIcon
          className={cn('ml-2 inline h-4 w-4', className)}
          onClick={copyToClipboard}
          {...props}
        />
      )}
    </button>
  )
}
