import { BookTextIcon } from '@components/icons/book-text'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
  PageMain,
} from '../../_components/page-container'
import { BookVolumeList } from './_components/book-volume-list'
import { CallToPublish } from './_components/call-to-publish'
import { PublishYourBook } from './_components/publish-your-book'

const requirements = [
  'Contar sempre com ISBN e ficha catalográfica registrada;',
  'Parcialmente bilíngue, inclusive aceitando trabalhos em inglês, espanhol, português e francês;',
  'Comitê editorial internacional;',
  'Todos os volumes com prefácio;',
  'Publicação com avaliação e selo de editora acadêmica/universitária (Editora da UFRR);',
  'Fluxo editorial regulado e legitimado por meio de edital público de chamamento de propostas de capítulos, contando com avaliação em sistema duplo-cego (double blind review);',
  'Acesso livre e gratuito das obras finais por meio de download de pdf do livro todo;',
  'Índice remissivo de assuntos (do volume e da série toda);',
  'Financiamento institucional pelo Instituto de Pesquisas Amazônicas e de Povos Tradicionais;',
  'Controle de plágio e endogenia institucional;',
  'Exigência de (no mínimo) um doutor no corpo autoral de cada capítulo.',
]

export default function ColetaneaRedeCT() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <BookTextIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Livros da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Série internacional sobre Povos Originários e Comunidades Tradicionais.
        Conheça os volumes publicados, critérios de qualidade e participe da
        chamada para o volume 14 (2025).
      </PageDescription>

      <PageMain className="gap-8">
        <PublishYourBook />

        <section className="space-y-8">
          <h2 className="whitespace-normal font-bold text-2xl lg:text-4xl">
            Apresentação da série de livros da RedeCT
          </h2>
          <p className="text-justify">
            A RedeCT reúne uma coletânea crescente de capítulos de livros, com
            mais de 150 capítulos publicados. A série apresenta pesquisas e
            trabalhos de extensão universitária sobre Povos Originários e
            Comunidades Tradicionais, com rigor editorial e visibilidade
            acadêmica internacional.
          </p>
        </section>

        <CallToPublish />

        <section className="space-y-8">
          <h2 className="whitespace-normal font-bold text-xl lg:text-2xl">
            Requisitos de qualidade do sistema CAPES-Livro atendidos
          </h2>

          <ol className="space-y-4">
            {requirements.map((item, index: number) => (
              <li className="flex items-start" key={index}>
                <span className="mt-1 mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-justify">
            Quanto mais citações destas obras, melhores tendem a ser as
            avaliações da RedeCT pela CAPES.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="whitespace-normal font-bold text-xl lg:text-2xl">
            Acesso aos volumes já publicados e índice remissivo por assunto
          </h2>

          <BookVolumeList />
        </section>
      </PageMain>
    </PageContainer>
  )
}
