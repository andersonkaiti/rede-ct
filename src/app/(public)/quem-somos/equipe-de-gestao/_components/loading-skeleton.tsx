import { Skeleton } from '@components/ui/skeleton'
import { UserCardSkeleton } from '@components/ui/user-card'

const SECTIONS = 2
const MEMBERS_PER_SECTION = 3

export default function LoadingSkeleton() {
  return (
    <div>
      {[...new Array(SECTIONS)].map((_, sectionIdx) => (
        <section className="space-y-4 md:space-y-8" key={sectionIdx}>
          <Skeleton className="mx-auto h-8 w-60 rounded-full px-4 text-center" />

          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            {[...new Array(MEMBERS_PER_SECTION)].map((__, memberIdx) => (
              <UserCardSkeleton key={memberIdx} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
