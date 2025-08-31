'use client'

import { useCopyClipboard } from '@hooks/copy-clipboard.hook'
import { cn } from '@utils/cn'
import { Check } from 'lucide-react'
import { CopyIcon } from './icons/copy'

interface ICopyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode
}

export function Copy({ children, className, ...props }: ICopyProps) {
  const { copyToClipboard, isCopied } = useCopyClipboard(children as string)

  return (
    <button
      className={cn('inline-flex cursor-pointer items-center', className)}
      onClick={copyToClipboard}
      type="button"
    >
      {children}
      {isCopied ? (
        <Check className="ml-2 inline h-4 w-4" />
      ) : (
        <CopyIcon
          className={cn('ml-2 inline', className)}
          onClick={copyToClipboard}
          {...props}
          size={20}
        />
      )}
    </button>
  )
}
