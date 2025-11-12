import { Badge } from '@components/ui/badge'
import { FileTextIcon } from 'lucide-react'
import { MeetingsList } from './_components/meetings-list'

export default function MeetingsAndMinutes() {
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

			<MeetingsList />
		</main>
	)
}
