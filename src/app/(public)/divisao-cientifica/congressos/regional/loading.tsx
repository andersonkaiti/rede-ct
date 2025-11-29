import { BackArrow } from '@components/back-arrow'
import { Badge } from '@components/ui/badge'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import { MapIcon } from 'lucide-react'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow href="/divisao-cientifica/congressos" />

      <header className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <MapIcon className="size-7" />
          </Badge>
          <h1 className="title-2">Congresso Regional</h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Participe do nosso Congresso Regional, um evento dedicado à troca de
          conhecimentos e experiências entre pesquisadores e profissionais
          regionais.
        </p>
      </header>

      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-full gap-2 sm:w-fit">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-9 w-10" />
        </div>
      </div>

      <LoadingSkeleton />

      <Separator />

      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-52" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </div>
    </main>
  )
}
