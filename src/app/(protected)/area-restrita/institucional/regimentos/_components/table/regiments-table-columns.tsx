import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
import { cn } from '@utils/cn'
import { Ban, Eye, FileCheck2, FileClock } from 'lucide-react'
import Link from 'next/link'
import { ActionsRow } from './actions-row'

interface IRegiment {
	id: string
	title: string
	version: string
	publishedAt: string
	documentUrl: string
	status: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
	createdAt: string
	updatedAt: string
}

const STATUS_INFO_MAP: Record<
	IRegiment['status'],
	{ label: string; color: string; Icon: React.ElementType }
> = {
	DRAFT: {
		label: 'Rascunho',
		color: 'text-muted-foreground',
		Icon: FileClock,
	},
	IN_FORCE: {
		label: 'Em vigor',
		color: 'text-emerald-700',
		Icon: FileCheck2,
	},
	REVOKED: {
		label: 'Revogado',
		color: 'text-red-700',
		Icon: Ban,
	},
}

export const regimentsTableColumns: ColumnDef<IRegiment>[] = [
	{
		id: 'title',
		header: 'Título',
		cell: ({
			row: {
				original: { title },
			},
		}) => title,
	},
	{
		id: 'version',
		header: 'Versão',
		cell: ({
			row: {
				original: { version },
			},
		}) => version,
	},
	{
		id: 'publishedAt',
		header: 'Publicado em',
		cell: ({
			row: {
				original: { publishedAt },
			},
		}) => new Date(publishedAt).toLocaleDateString('pt-BR'),
	},
	{
		id: 'status',
		header: 'Status',
		cell: ({
			row: {
				original: { status },
			},
		}) => {
			const { label, color, Icon } = STATUS_INFO_MAP[status]

			return (
				<div
					className={cn(
						'flex items-center gap-1.5 px-2 py-1 text-xs font-medium capitalize',
						color,
					)}
				>
					<Icon className="size-4.5 mr-1" />
					{label}
				</div>
			)
		},
	},
	{
		id: 'documentUrl',
		header: 'Documento',
		cell: ({
			row: {
				original: { documentUrl },
			},
		}) => (
			<Button asChild variant="ghost">
				<Link href={documentUrl} target="_blank" rel="noopener noreferrer">
					<Eye />
					<span>Ver documento</span>
				</Link>
			</Button>
		),
	},
	{
		id: 'actions',
		header: 'Ações',
		cell: ({
			row: { original },
			table: {
				options: { meta },
			},
		}) => (
			<ActionsRow
				handleRemove={() => meta?.handleRemove?.(original.id)}
				id={original.id}
			/>
		),
	},
]
