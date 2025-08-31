'use client'

import {
  MailCheckIcon,
  type MailCheckIconHandle,
} from '@components/icons/mail-check'
import Link from 'next/link'
import { useRef } from 'react'

export function ContactEmail() {
  const iconRef = useRef<MailCheckIconHandle>(null)

  return (
    <div
      className="flex items-center gap-4 rounded-lg bg-primary/5 p-4 md:col-span-2"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <MailCheckIcon className="text-primary" ref={iconRef} />

      <div>
        <p className="font-semibold">E-mails de contato</p>
        <span className="block text-muted-foreground">
          <Link
            className="underline transition-colors hover:text-primary"
            href="mailto:redect.pesquisa@gmail.com"
            target="_blank"
          >
            redect.pesquisa@gmail.com
          </Link>{' '}
          |{' '}
          <Link
            className="underline transition-colors hover:text-primary"
            href="mailto:contato@redect.org"
            target="_blank"
          >
            contato@redect.org
          </Link>
        </span>
      </div>
    </div>
  )
}
