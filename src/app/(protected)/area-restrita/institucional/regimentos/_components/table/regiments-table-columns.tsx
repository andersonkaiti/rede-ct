import { Button } from '@components/ui/button'
import type { ColumnDef } from '@tanstack/react-table'
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

const STATUS_LABEL_MAP: Record<IRegiment['status'], string> = {
	DRAFT: 'Rascunho',
	IN_FORCE: 'Em vigor',
	REVOKED: 'Revogado',
}

const STATUS_ICON_MAP: Record<
	IRegiment['status'],
	{ icon: React.ElementType; color: string }
> = {
	DRAFT: { icon: FileClock, color: 'text-muted-foreground' },
	IN_FORCE: { icon: FileCheck2, color: 'text-emerald-600' },
	REVOKED: { icon: Ban, color: 'text-destructive' },
}

const TITLE_MAX_LENGTH = 30
const ELLIPSIS = '...'

export const regimentsTableColumns: ColumnDef<IRegiment>[] = [
	{
		id: 'title',
		header: 'Título',
		cell: ({
			row: {
				original: { title },
			},
		}) =>
			title.length > TITLE_MAX_LENGTH
				? `${title.slice(0, TITLE_MAX_LENGTH)}${ELLIPSIS}`
				: title,
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
			const { icon: Icon, color } = STATUS_ICON_MAP[status]
			return (
				<span className="inline-flex items-center gap-2">
					<Icon className={`size-4 ${color}`} />
					<span className={color}>{STATUS_LABEL_MAP[status]}</span>
				</span>
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
