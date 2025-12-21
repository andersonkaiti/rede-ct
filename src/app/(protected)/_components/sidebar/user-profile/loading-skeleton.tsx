import { Skeleton } from '@components/ui/skeleton'
import { User } from 'lucide-react'

export function LoadingSkeleton() {
  return (
    <div className="flex items-center justify-between gap-2 px-2">
      <div className="flex items-center gap-2">
        <Skeleton className="flex size-9 items-center justify-center rounded-full">
          <User className="h-5 w-5 text-gray-200" />
        </Skeleton>
        <Skeleton className="h-4 w-24 rounded-full" />
      </div>
      <Skeleton className="h-4 w-2 rounded-full" />
    </div>
  )
}
