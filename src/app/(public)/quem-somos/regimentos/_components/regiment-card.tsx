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
			className="relative border bg-background rounded-lg p-6 transition-all duration-300"
			role="article"
			aria-labelledby={`regiment-title-${regiment.id}`}
		>
			<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
				<div className="flex items-start gap-3 flex-1 min-w-0">
					<div
						className="mt-1 p-2.5 bg-muted/50 rounded-lg shrink-0 transition-colors"
						aria-hidden="true"
					>
						<FileText className="size-5 text-muted-foreground" />
					</div>
					<div className="flex-1 min-w-0">
						<h3
							id={`regiment-title-${regiment.id}`}
							className="font-semibold text-base leading-tight wrap-break-word"
						>
							{regiment.title}
						</h3>
						<p className="text-sm text-muted-foreground mt-1.5">
							Versão {regiment.version}
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-1 sm:items-end shrink-0">
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
							className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1.5 group/link"
							aria-label={`Enviar sugestões por e-mail sobre ${regiment.title}`}
						>
							<Mail className="size-3 transition-transform group-hover/link:translate-x-0.5" />
							Envie sugestões por e-mail
						</Link>
					)}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 mt-5 border-t border-border">
				<div className="flex flex-col gap-1.5">
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						Publicado em
					</p>
					<time dateTime={regiment.publishedAt} className="text-sm font-medium">
						{format(new Date(regiment.updatedAt), "dd 'de' MMM'.' 'de' yyyy", {
							locale: pt,
						})}
					</time>
				</div>
				<div className="flex flex-col gap-1.5">
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						Atualizado em
					</p>
					<time dateTime={regiment.updatedAt} className="text-sm font-medium">
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
