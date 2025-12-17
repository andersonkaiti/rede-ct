import { FileTextIcon } from '@components/icons/file-text'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicScientificArticleList = dynamic(() =>
  import('./_components/scientific-article-list').then(
    (mod) => mod.ScientificArticleList,
  ),
)

export default function ArtigosCientificos() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <FileTextIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Artigos Científicos da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Nesta seção são publicadas apresentações e links de acesso a artigos
        científicos publicados em periódicos de interesse dos Pesquisadores
        Filiados à RedeCT. Todos os artigos abordam temas relacionados aos Povos
        Originários e Comunidades Tradicionais.
      </PageDescription>

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
    </PageContainer>
  )
}
