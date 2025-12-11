import { Badge } from '@components/ui/badge'
import { GalleryHorizontal } from 'lucide-react'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'
import { MuseumList } from './_components/museum-list'

export default function Museus() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <GalleryHorizontal className="size-7" />
          </Badge>
          <h1 className="title-2">Museus</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Conheça os museus e espaços museológicos parceiros da RedeCT. Estes
          espaços são fundamentais para a preservação, pesquisa e difusão do
          patrimônio cultural de povos originários e comunidades tradicionais,
          promovendo o diálogo entre saberes tradicionais e científicos.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <MuseumList />
      </Suspense>

      <footer className="text-justify text-lg text-muted-foreground">
        <p>
          Os museus parceiros da RedeCT desenvolvem atividades de preservação,
          pesquisa e educação patrimonial, trabalhando em colaboração com
          comunidades tradicionais. Essas instituições desempenham papel
          essencial na valorização das culturas tradicionais, na salvaguarda de
          acervos materiais e imateriais, e na promoção do acesso público ao
          conhecimento sobre a diversidade cultural brasileira.
        </p>
      </footer>
    </main>
  )
}
