'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { RegimentCard } from './regiment-card'
import { useRegiments } from './use-regiments'

export function RegimentsList() {
	const { data, isLoading, page, limit } = useRegiments()

	return (
		<>
			<div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
				<FilterInput />
			</div>

			{isLoading && <LoadingSkeleton />}

			{data?.regiments && (
				<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
					{data?.regiments?.map((regiment) => (
						<RegimentCard key={regiment.id} regiment={regiment} />
					))}
				</div>
			)}

			{!isLoading && !data?.regiments?.length && (
				<div className="col-end-3 flex w-full flex-col items-center justify-center">
					<p className="font-medium text-lg text-muted-foreground">
						Nenhum regimento encontrado.
					</p>
					<span className="mt-2 text-muted-foreground text-sm">
						Tente ajustar o filtro ou pesquise por outro termo.
					</span>
				</div>
			)}

			<Separator />

			<PaginatorComponent
				currentPage={Number(page)}
				defaultRowsPerPage={Number(limit)}
				totalPages={data?.totalPages ?? 1}
			/>
		</>
	)
}
