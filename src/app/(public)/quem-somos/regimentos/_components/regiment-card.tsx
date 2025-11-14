'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card } from '@components/ui/card'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { AlertCircle, CheckCircle, Eye, FileText, Mail } from 'lucide-react'
import Link from 'next/link'

type RegimentStatus = 'DRAFT' | 'IN_FORCE' | 'REVOKED'

interface Regiment {
  id: string
  title: string
  version: string
  publishedAt: string
  documentUrl: string
  status: RegimentStatus
  createdAt: string
  updatedAt: string
}

interface RegimentCardProps {
  regiment: Regiment
}

const statusConfig: Record<
  RegimentStatus,
  {
    label: string
    icon: typeof AlertCircle
    badgeClass: string
    ariaLabel: string
  }
> = {
  DRAFT: {
    label: 'Rascunho',
    icon: AlertCircle,
    badgeClass:
      'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    ariaLabel: 'Status: Rascunho',
  },
  IN_FORCE: {
    label: 'Em Vigor',
    icon: CheckCircle,
    badgeClass:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
    ariaLabel: 'Status: Em Vigor',
  },
  REVOKED: {
    label: 'Revogado',
    icon: AlertCircle,
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    ariaLabel: 'Status: Revogado',
  },
}

const EMAIL_SUGGESTIONS = 'redect.pesquisa@gmail.com'

export function RegimentCard({ regiment }: RegimentCardProps) {
  const config = statusConfig[regiment.status]
  const StatusIcon = config.icon

  return (
    <Card
      className="relative rounded-lg border bg-background p-6 transition-all duration-300"
      role="article"
      aria-labelledby={`regiment-title-${regiment.id}`}
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <div
            className="mt-1 shrink-0 rounded-lg bg-muted/50 p-2.5 transition-colors"
            aria-hidden="true"
          >
            <FileText className="size-5 text-muted-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <h3
              id={`regiment-title-${regiment.id}`}
              className="wrap-break-word font-semibold text-base leading-tight"
            >
              {regiment.title}
            </h3>
            <p className="mt-1.5 text-muted-foreground text-sm">
              Versão {regiment.version}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-1 sm:items-end">
          <Badge
            className={`flex items-center gap-1.5 ${config.badgeClass} whitespace-nowrap`}
            aria-label={config.ariaLabel}
            variant="outline"
          >
            <StatusIcon className="size-3.5" aria-hidden="true" />
            <span>{config.label}</span>
          </Badge>

          {regiment.status === 'DRAFT' && (
            <Link
              href={`mailto:${EMAIL_SUGGESTIONS}?subject=Sugestões para ${encodeURIComponent(regiment.title)}`}
              className="group/link flex items-center gap-1.5 font-medium text-muted-foreground text-xs transition-colors hover:text-primary"
              aria-label={`Enviar sugestões por e-mail sobre ${regiment.title}`}
            >
              <Mail className="size-3 transition-transform group-hover/link:translate-x-0.5" />
              Envie sugestões por e-mail
            </Link>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 border-border border-t pt-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <p className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
            Publicado em
          </p>
          <time dateTime={regiment.publishedAt} className="font-medium text-sm">
            {format(new Date(regiment.updatedAt), "dd 'de' MMM'.' 'de' yyyy", {
              locale: pt,
            })}
          </time>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
            Atualizado em
          </p>
          <time dateTime={regiment.updatedAt} className="font-medium text-sm">
            {format(new Date(regiment.updatedAt), "dd 'de' MMM'.' 'de' yyyy", {
              locale: pt,
            })}
          </time>
        </div>
      </div>

      <Button variant="default" size="sm" className="w-full" asChild>
        <Link
          href={regiment.documentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
          aria-label={`Visualizar documento: ${regiment.title}`}
        >
          <Eye className="size-4" />
          Visualizar
        </Link>
      </Button>
    </Card>
  )
}
