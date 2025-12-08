import { UserCardSkeleton } from '@components/ui/user-card'

const ARRAY_SIZE = 9

export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
        <UserCardSkeleton key={index} />
      ))}
    </div>
  )
}
