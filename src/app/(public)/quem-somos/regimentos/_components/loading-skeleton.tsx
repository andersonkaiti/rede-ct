'use client'

import { Card } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
	return (
		<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
			{Array.from({ length: SKELETON_COUNT }).map((_, index) => (
				<Card
					key={index}
					className="relative border bg-background rounded-lg p-6 transition-all duration-300 animate-pulse"
				>
					<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
						<div className="flex items-start gap-3 flex-1 min-w-0">
							<Skeleton className="size-10 rounded-lg mt-1" />

							<div className="flex-1 min-w-0">
								<Skeleton className="h-5 w-3/4 rounded-md" />
								<Skeleton className="h-4 w-1/3 rounded-md mt-1.5" />
							</div>
						</div>

						<div className="flex flex-col gap-1 sm:items-end">
							<Skeleton className="h-6 w-20 rounded-full" />
							<Skeleton className="h-3 w-32 rounded-md" />
						</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 mt-5.5 border-t border-border">
						<div className="flex flex-col gap-1.5">
							<Skeleton className="h-4 w-28 rounded-md" />
							<Skeleton className="h-5 w-36 rounded-md" />
						</div>

						<div className="flex flex-col gap-1.5">
							<Skeleton className="h-4 w-32 rounded-md" />
							<Skeleton className="h-5 w-36 rounded-md" />
						</div>
					</div>

					<Skeleton className="h-8 w-full rounded-md" />
				</Card>
			))}
		</div>
	)
}
