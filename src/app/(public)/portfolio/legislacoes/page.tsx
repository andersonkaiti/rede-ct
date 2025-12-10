import { Badge } from '@components/ui/badge'
import { Scale } from 'lucide-react'
import { Suspense } from 'react'
import { LawsList } from './_components/laws-list'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default async function Legislacoes() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Scale className="size-7" />
          </Badge>
          <h1 className="title-2">
            Legislações de interesse dos pesquisadores da RedeCT
          </h1>
        </div>
        <p className="text-justify text-lg text-muted-foreground">
          Compilação de legislações relevantes para povos e comunidades
          tradicionais de diversos países, com foco em direitos, proteção
          territorial e reconhecimento cultural.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <LawsList />
      </Suspense>
    </main>
  )
}
