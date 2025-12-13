import { UsersIcon } from '@components/icons/users'
import { Badge } from '@components/ui/badge'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicPartnerList = dynamic(() =>
  import('./_components/partner-list').then((m) => m.PartnerList),
)

export default function ParceirosEFinanciadores() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <UsersIcon />
          </Badge>
          <h1 className="title-2">Parcerias institucionais e financiamentos</h1>
        </div>
        <p className="text-justify text-muted-foreground">
          Nesta seção, a RedeCT apresenta cada um de seus Parceiros
          Institucionais, descreve quando e como a parceria foi estabelecida e
          os resultados alcançados.
        </p>
      </section>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicPartnerList />
      </Suspense>
    </main>
  )
}
