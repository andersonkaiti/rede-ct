'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@components/ui/card'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'

const SKELETON_COUNT = 6

export function LoadingSkeleton() {
	return (
		<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
			{Array.from({ length: SKELETON_COUNT }).map((_, index) => (
				<Card key={index} className="flex flex-col">
					<CardHeader className="border-b border-border p-6">
						<div className="flex items-start justify-between gap-2">
							<Skeleton className="h-7 w-3/4 rounded-md" />
						</div>
						<div className="mt-4 flex flex-wrap gap-2">
							<Skeleton className="h-6 w-24 rounded-full" />
							<Skeleton className="h-6 w-20 rounded-full" />
						</div>
					</CardHeader>

					<CardContent className="flex flex-col gap-2 px-6">
						<div className="p-2.5">
							<div className="flex items-center justify-between">
								<Skeleton className="h-4 w-20 rounded-md" />
								<Skeleton className="size-4 rounded-full" />
							</div>
						</div>

						<Separator />

						<div className="p-2.5">
							<div className="flex items-center justify-between">
								<Skeleton className="h-4 w-12 rounded-md" />
								<Skeleton className="size-4 rounded-full" />
							</div>
						</div>

						<Separator />

						<div className="space-y-4 p-4">
							<div className="flex items-center gap-2">
								<Skeleton className="size-5 rounded-sm" />
								<Skeleton className="h-4 w-32 rounded-md" />
							</div>
							<div className="flex items-center gap-2">
								<Skeleton className="size-5 rounded-sm" />
								<Skeleton className="h-4 w-24 rounded-md" />
							</div>
							<div className="flex items-center gap-2">
								<Skeleton className="size-5 rounded-sm" />
								<Skeleton className="h-4 w-40 rounded-md" />
							</div>
						</div>
					</CardContent>

					<CardFooter className="pt-0 mt-auto">
						<Skeleton className="h-10 w-full rounded-md" />
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
