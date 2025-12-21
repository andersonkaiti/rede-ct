import { FileTextIcon } from '@components/icons/file-text'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { ScientificJournalList } from './_components/scientific-journal-list'

export default function PeriodicoERevistasParceiras() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <FileTextIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Periódico Científico da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        A RedeCT está orientada para a criação de sua Revista Científica, com
        identidade específica entre universidade, ciência e Povos Tradicionais.
      </PageDescription>

      <section className="space-y-8">
        <h2 className="whitespace-normal font-bold text-xl lg:text-2xl">
          Uma breve explicação
        </h2>
        <p className="rounded-md border border-primary/20 bg-primary/20 p-10 text-justify text-muted-foreground">
          Este é um projeto audacioso e complexo, exigindo planejamento técnico,
          editorial e político. Enquanto o periódico não está pronto,
          fortalecemos nossa presença científica através de{' '}
          <span className="font-semibold text-primary">revistas parceiras</span>
          .
        </p>
      </section>

      <section className="space-y-7">
        <h3 className="whitespace-normal font-bold text-2xl lg:text-4xl">
          Revistas Científicas Parceiras
        </h3>

        <p className="whitespace-normal text-lg text-muted-foreground">
          Colaboramos com revistas científicas renomadas para fortalecer a
          pesquisa e divulgação científica
        </p>

        <ScientificJournalList />
      </section>
    </PageContainer>
  )
}
