'use client'

import { Card } from '@components/ui/card'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 2

export function LoadingSkeleton() {
	return (
		<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
			{Array.from({ length: SKELETON_COUNT }).map((_, index) => (
				<Card
					key={index}
					className="relative border bg-background rounded-lg p-6 transition-all duration-300 animate-pulse"
				>
					<div className="flex items-start justify-between">
						<div className="flex items-start gap-3 flex-1">
							<Skeleton className="size-9 rounded-lg mt-1" />

							<div className="flex-1">
								<Skeleton className="h-5 w-3/4 rounded-md" />
								<Skeleton className="h-5 w-1/3 rounded-md mt-1" />
							</div>
						</div>

						<Skeleton className="h-6 w-20 rounded-full ml-2" />
					</div>

					<div className="grid grid-cols-2 gap-4 pb-5 border-t border-current/10">
						<div className="mt-4 flex flex-col gap-2">
							<Skeleton className="h-4 w-28 rounded-md" />
							<Skeleton className="h-5 w-36 rounded-md" />
						</div>

						<div className="mt-4 flex flex-col gap-2">
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
