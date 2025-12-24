'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
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
  const formattedPublishedAt = format(
    regiment.publishedAt,
    "dd 'de' MMM'.' 'de' yyyy",
    { locale: pt },
  )

  const formattedUpdatedAt = format(
    regiment.updatedAt,
    "dd 'de' MMM'.' 'de' yyyy",
    { locale: pt },
  )

  return (
    <Card>
      <CardHeader className="flex gap-4">
        <Badge className="hidden bg-primary/20 p-2.5 lg:flex">
          <FileText className="size-5 text-primary" />
        </Badge>

        <div className="space-y-2">
          <CardTitle className="line-clamp-2 font-semibold text-foreground text-xl">
            {regiment.title}
          </CardTitle>

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

      <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1 text-sm">
          <h2 className="text-muted-foreground">Publicado em</h2>

          <p className="whitespace-pre-wrap text-justify text-sm">
            {formattedPublishedAt}
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <h2 className="text-muted-foreground">Atualizado em</h2>
          <p className="whitespace-pre-wrap text-justify text-sm">
            {formattedUpdatedAt}
          </p>
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
