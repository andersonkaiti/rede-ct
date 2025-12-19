'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { FileText, Mail } from 'lucide-react'
import Link from 'next/link'
import { RegimentStatus } from './regiment-status'

interface RegimentCardProps {
  regiment: {
    id: string
    title: string
    version: string
    publishedAt: Date
    documentUrl: string
    status: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
    createdAt: Date
    updatedAt: Date
  }
}

const EMAIL_SUGGESTIONS = 'redect.pesquisa@gmail.com'

export function RegimentCard({ regiment }: RegimentCardProps) {
  return (
    <Card>
      <CardHeader className="flex gap-4">
        <Badge className="hidden bg-primary/20 p-2.5 md:flex">
          <FileText className="size-5 text-primary" />
        </Badge>

        <div className="space-y-2">
          <h3 className="wrap-break-word font-semibold text-base leading-tight">
            {regiment.title}
          </h3>

          <p className="mt-1.5 text-muted-foreground text-sm">
            Versão {regiment.version}
          </p>

          <div className="flex items-center gap-4">
            <RegimentStatus status={regiment.status} />

            {regiment.status === 'DRAFT' && (
              <Link
                href={`mailto:${EMAIL_SUGGESTIONS}?subject=Sugestões para ${encodeURIComponent(regiment.title)}`}
                className="flex items-center gap-1.5 font-medium text-xs"
                aria-label={`Enviar sugestões por e-mail sobre ${regiment.title}`}
              >
                <Mail className="size-3" />
                Envie sugestões por e-mail
              </Link>
            )}
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <p className="font-medium text-muted-foreground text-xs">
            Publicado em
          </p>

          <time className="font-medium text-sm">
            {format(regiment.publishedAt, "dd 'de' MMM'.' 'de' yyyy", {
              locale: pt,
            })}
          </time>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="font-medium text-muted-foreground text-xs">
            Atualizado em
          </p>
          <time className="font-medium text-sm">
            {format(regiment.updatedAt, "dd 'de' MMM'.' 'de' yyyy", {
              locale: pt,
            })}
          </time>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link
            href={regiment.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visualizar documento: ${regiment.title}`}
          >
            Visualizar
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
