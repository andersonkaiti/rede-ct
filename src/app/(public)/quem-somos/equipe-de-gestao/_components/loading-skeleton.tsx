import { Skeleton } from '@components/ui/skeleton'
import { UserCardSkeleton } from '@components/ui/user-card'

const SECTIONS = 2
const MEMBERS_PER_SECTION = 6

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col justify-center gap-12.5">
      {[...new Array(SECTIONS)].map((_, sectionIdx) => (
        <section className="space-y-4 md:space-y-8" key={sectionIdx}>
          <div className="space-y-8">
            <Skeleton className="mx-auto h-10 w-60 rounded-full px-4 text-center" />
            <Skeleton className="mx-auto h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[var(--skeleton)] to-transparent" />
          </div>

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
