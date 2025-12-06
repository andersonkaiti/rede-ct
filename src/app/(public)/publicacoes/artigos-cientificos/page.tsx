import { FileTextIcon } from '@components/icons/file-text'
import { Badge } from '@components/ui/badge'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicScientificArticleList = dynamic(() =>
  import('./_components/scientific-article-list').then(
    (mod) => mod.ScientificArticleList,
  ),
)

export default function ArtigosCientificos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <FileTextIcon />
          </Badge>
          <h1 className="title-2">Artigos Científicos da RedeCT</h1>
        </div>
        <p className="text-justify text-muted-foreground">
          Nesta seção são publicadas apresentações e links de acesso a artigos
          científicos publicados em periódicos de interesse dos Pesquisadores
          Filiados à RedeCT. Todos os artigos abordam temas relacionados aos
          Povos Originários e Comunidades Tradicionais.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicScientificArticleList />
      </Suspense>

      <section className="space-y-6 rounded-md bg-linear-to-br from-primary to-red-700 p-6 text-center text-white md:p-10">
        <h2 className="font-semibold text-3xl text-white">
          Submeta seu artigo científico
        </h2>
        <p className="text-white leading-relaxed">
          A RedeCT está desenvolvendo um sistema de avaliação e certificação de
          artigos científicos. Em breve, você poderá submeter seus trabalhos
          para análise e publicação nesta plataforma. Acompanhe as novidades
          através dos nossos canais oficiais.
        </p>
      </section>
    </main>
  )
}
