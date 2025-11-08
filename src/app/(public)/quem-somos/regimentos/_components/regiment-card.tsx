'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Card } from '@components/ui/card'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { AlertCircle, CheckCircle, Eye, FileText } from 'lucide-react'
import Link from 'next/link'

interface RegimentCardProps {
	regiment: {
		id: string
		title: string
		version: string
		publishedAt: string
		documentUrl: string
		status: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
		createdAt: string
		updatedAt: string
	}
}

const statusConfig = {
	DRAFT: {
		label: 'Rascunho',
		icon: AlertCircle,
		badgeClass:
			'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
	},
	IN_FORCE: {
		label: 'Em Vigor',
		icon: CheckCircle,
		badgeClass:
			'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
	},
	REVOKED: {
		label: 'Revogado',
		icon: AlertCircle,
		badgeClass: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
	},
}

export function RegimentCard({ regiment }: RegimentCardProps) {
	const config = statusConfig[regiment.status]
	const StatusIcon = config.icon

	return (
		<Card className="relative border bg-background rounded-lg p-6 transition-all duration-300 hover:shadow-md">
			<div className="flex items-start justify-between">
				<div className="flex items-start gap-3 flex-1">
					<div className="mt-1 p-2 bg-background/50 rounded-lg">
						<FileText className="size-5" />
					</div>
					<div className="flex-1">
						<h3 className="font-semibold text-base leading-tight pr-2">
							{regiment.title}
						</h3>
						<p className="text-sm opacity-75 mt-1">Versão {regiment.version}</p>
					</div>
				</div>
				<Badge
					className={`ml-2 flex items-center gap-1 ${config.badgeClass} whitespace-nowrap`}
				>
					<StatusIcon className="size-3.5" />
					{config.label}
				</Badge>
			</div>

			<div className="grid grid-cols-2 gap-4 pb-5 border-t border-current/10">
				<div className="mt-4 flex flex-col gap-2">
					<p className="text-xs font-medium opacity-60 uppercase tracking-wider">
						Publicado em
					</p>
					<p className="text-sm font-medium">
						{format(new Date(regiment.publishedAt), "dd 'de' MMMM 'de' yyyy", {
							locale: pt,
						})}
					</p>
				</div>
				<div className="mt-4 flex flex-col gap-2">
					<p className="text-xs font-medium opacity-60 uppercase tracking-wider">
						Atualizado em
					</p>
					<p className="text-sm font-medium">
						{format(new Date(regiment.updatedAt), "dd 'de' MMM 'de' yyyy", {
							locale: pt,
						})}
					</p>
				</div>
			</div>

			<Button
				variant="outline"
				size="sm"
				className="w-full bg-transparent"
				asChild
			>
				<Link
					href={regiment.documentUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2"
				>
					<Eye className="w-4 h-4" />
					Visualizar
				</Link>
			</Button>
		</Card>
	)
}
