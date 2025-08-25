import { Button } from '@components/ui/button'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicBooks = dynamic(() =>
  import('./_components/books').then((mod) => mod.Books)
)

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
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Livro Coletânea de Capítulos da RedeCT</h1>

        <p className="text-muted-foreground">
          Série internacional sobre Povos Originários e Comunidades
          Tradicionais. Conheça os volumes publicados, critérios de qualidade e
          participe da chamada para o volume 14 (2025).
        </p>
      </header>

      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2">
        <div className="space-y-4 text-left">
          <p className="font-bold text-3xl">
            Publique seu livro na série de livros da RedeCT
          </p>
          <p className="font-semibold text-primary">
            Você só paga as taxas de edição final e hospedagem da Editora Fi, a
            RedeCT não cobra taxas adicionais de seus filiados.
          </p>

          <p className="font-bold text-3xl">Série na Editora Fi</p>

          <p className="text-muted-foreground">
            Desde 2018, a RedeCT mantém um espaço para a publicação de livros de
            seus Pesquisadores Filiados, a série de livros intitulada{' '}
            <span className="font-bold text-primary">
              &quot;Estudos sobre Povos Originários e Comunidades
              Tradicionais&quot;
            </span>
            , contando com comitê editorial internacional.
          </p>

          <p className="mb-2">
            A série de livros está hospedada no website da EDITORA FI (clique na
            figura ao lado ou acesse o link{' '}
            <Link
              className="font-semibold text-primary hover:underline"
              href="https://editorafi.org/povos"
              target="_blank"
            >
              editorafi.org/povos
            </Link>
            ) e segue a política internacional de acesso livre/gratuito aos
            interessados na leitura da obra final (é só o leitor baixar o
            arquivo em pdf), mas se preferir o livro físico é só fazer o pedido
            no próprio website e não precisa comprar lote (o orçamento e a
            remessa pode ser de apenas um exemplar).
          </p>

          <div className="rounded-md border border-primary/10 bg-primary/10 p-4 text-primary text-sm italic">
            <span className="font-bold">Responsável:</span> Me. Isaltina Santos
            da Costa Oliveira (TINA).
          </div>
        </div>

        <picture className="relative h-70 w-full rounded-md border border-gray-300 p-2 shadow-lg">
          <Image
            alt="Série Estudos sobre Povos Originários e Comunidades Tradicionais"
            className="overflow-hidden object-cover"
            fill
            src="https://redect.org/novaredect/images/2024/04/03/serie-na-fi.png"
          />
        </picture>
      </div>

      <main className="space-y-20">
        <section className="space-y-8">
          <h2 className="title-2">Apresentação da série de livros da RedeCT</h2>
          <p className="text-justify text-muted-foreground leading-relaxed">
            A RedeCT reúne uma coletânea crescente de capítulos de livros, com
            mais de 150 capítulos publicados. A série apresenta pesquisas e
            trabalhos de extensão universitária sobre Povos Originários e
            Comunidades Tradicionais, com rigor editorial e visibilidade
            acadêmica internacional.
          </p>
        </section>

        <section className="space-y-6 rounded-md bg-gradient-to-br from-primary to-red-700 p-6 text-center text-white md:p-10">
          <h2 className="font-semibold text-3xl text-white">
            Chamada para publicação do volume 14 (2025)
          </h2>
          <p className="text-white leading-relaxed">
            O período de submissão para propostas de capítulos do volume 14 foi
            prorrogado até 31 de maio de 2025. O envio deve incluir o arquivo
            completo do capítulo (Word e PDF), conforme edital oficial. Dúvidas
            podem ser esclarecidas pelo e-mail{' '}
            <Link
              className="font-semibold underline"
              href="mailto:livroredect@gmail.com"
            >
              livroredect@gmail.com
            </Link>
            .
          </p>
          <Button variant="secondary">
            <Link
              href="https://onedrive.live.com/embed?cid=6afd3e4c750a5cf9&id=6AFD3E4C750A5CF9!s6451fa92e2c3450f879aa5dbc391cdda&resid=6AFD3E4C750A5CF9!s6451fa92e2c3450f879aa5dbc391cdda&ithint=file,pdf&embed=1&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy82YWZkM2U0Yzc1MGE1Y2Y5L0lRU1MtbEZrdy1JUFJZZWFwZHZEa2MzYUFlS2h1Tld4c0ZGRURJbjdKTnlrOHVj"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar Edital do Volume 14 (2025)
            </Link>
          </Button>
        </section>

        <section className="space-y-8">
          <h2 className="title-3">
            Requisitos de qualidade do sistema CAPES-Livro atendidos
          </h2>
          <ol className="space-y-4">
            {requirements.map((item, index: number) => (
              <li className="flex items-start" key={index}>
                <span className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-justify text-muted-foreground text-sm italic">
            Quanto mais citações destas obras, melhores tendem a ser as
            avaliações da RedeCT pela CAPES.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="title-3">
            Acesso aos volumes já publicados e índice remissivo por assunto
          </h2>
          <Suspense fallback={<LoadingSkeleton />}>
            <DynamicBooks />
          </Suspense>
        </section>
      </main>
    </div>
  )
}
