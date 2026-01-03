import { FileTextIcon } from '@components/icons/file-text'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { ScientificArticleList } from './_components/scientific-article-list'

export default function ScientificArticles() {
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

      <ScientificArticleList />

      <section className="space-y-6 rounded-md bg-primary/20 p-6 text-center text-foreground md:p-10">
        <h2 className="font-semibold text-3xl">
          Submeta seu artigo científico
        </h2>
        <p className="text-justify">
          A RedeCT está desenvolvendo um sistema de avaliação e certificação de
          artigos científicos. Em breve, você poderá submeter seus trabalhos
          para análise e publicação nesta plataforma. Acompanhe as novidades
          através dos nossos canais oficiais.
        </p>
      </section>
    </PageContainer>
  )
}
