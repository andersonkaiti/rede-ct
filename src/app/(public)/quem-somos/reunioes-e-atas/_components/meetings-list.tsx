'use client'

import PaginatorComponent from '@components/ui/paginator'
import { Separator } from '@components/ui/separator'
import { FilterInput } from './filter-input'
import { LoadingSkeleton } from './loading-skeleton'
import { MeetingCard } from './meeting-card'
import { useMeetings } from './use-meetings'

export function MeetingsList() {
	const { data, isLoading, page, limit } = useMeetings()

	return (
		<>
			<div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
				<FilterInput />
			</div>

			{isLoading && <LoadingSkeleton />}

			{data?.meetings && (
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{data.meetings.map((meeting) => (
						<MeetingCard key={meeting.id} meeting={meeting} />
					))}
				</div>
			)}

			{!isLoading && (!data?.meetings || data.meetings.length === 0) && (
				<div className="col-end-3 flex w-full flex-col items-center justify-center">
					<p className="font-medium text-lg text-muted-foreground">
						Nenhuma reunião encontrada.
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
