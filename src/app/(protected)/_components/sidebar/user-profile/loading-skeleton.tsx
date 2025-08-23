import { Skeleton } from '@components/ui/skeleton'
import { User } from 'lucide-react'

export function LoadingSkeleton() {
  return (
    <Skeleton className="flex items-center justify-between gap-2 px-2">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300">
          <User className="h-5 w-5 text-gray-200" />
        </div>
        <div className="h-4 w-24 rounded-full bg-gray-200" />
      </div>
      <div className="h-4 w-2 rounded-full bg-gray-200" />
    </Skeleton>
  )
}
