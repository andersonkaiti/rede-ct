import { Badge } from '@components/ui/badge'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { FileTextIcon } from 'lucide-react'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
	return (
		<main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
			<header className="flex flex-col gap-8">
				<div className="flex items-center gap-4">
					<Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
						<FileTextIcon className="!size-7" />
					</Badge>
					<h1 className="title-2">Reuniões, Convocações, Pautas e Atas</h1>
				</div>
				<p className="text-muted-foreground text-sm">
					Encontre aqui convocações, pautas e atas das reuniões gerais,
					setoriais e das vice-coordenadorias e GTs da Rede CT.
				</p>
			</header>

			<div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
				<Skeleton className="w-52 h-9" />
				<Skeleton className="w-10 h-9" />
			</div>

			<LoadingSkeleton />

			<Separator />

			<div className="flex items-center justify-between">
				<Skeleton className="h-9 w-52" />
				<div className="flex items-center gap-2">
					<Skeleton className="h-9 w-9" />
					<Skeleton className="h-9 w-9" />
					<Skeleton className="h-9 w-9" />
				</div>
			</div>
		</main>
	)
}
