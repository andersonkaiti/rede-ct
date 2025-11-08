import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
	return (
		<main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
			<header className="flex flex-col gap-8">
				<h1 className="text-pretty font-bold text-4xl text-foreground sm:text-5xl">
					Regimentos
				</h1>

				<p className="text-muted-foreground text-sm">
					Conheça os regimentos e documentos que norteiam o funcionamento da
					Rede CT.
				</p>
			</header>

			<LoadingSkeleton />
		</main>
	)
}
