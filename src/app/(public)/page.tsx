import { RedNavigationCard } from '@components/ui/red-navigation-card'
import { BookOpen, Globe, Handshake, Newspaper, Users } from 'lucide-react'
import Link from 'next/link'

import { HeroSection } from './_components/home/hero-section'
import { MissaoValoresTabs } from './_components/home/missao-valores-tabs'

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="mx-auto flex max-w-7xl flex-col justify-center space-y-14 p-4 py-10 lg:p-25">
        <section className="space-y-14">
          <h2 className="text-center font-semibold text-3xl">
            Uma breve apresentação da RedeCT
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-justify">
                A RedeCT é uma rede independente que reúne pesquisadores
                (professores, estudantes, povos tradicionais e demais
                interessados) que atuam academica e cientificamente em
                colaboração com os Povos Tradicionais (indígenas, quilombolas,
                caiçaras, ribeirinhos, povos de terreiro, faxinalenses,
                geraizeiros, pantaneiros, quebradeiras de coco babaçu, dentre
                outros).
              </p>
              <p className="text-justify">
                A RedeCT é mantida pela OSCIP Instituto de Pesquisas Amazônicas
                e de Povos Tradicionais (criada em 2002) e desenvolve ações como
                o webinário permanente, a publicação anual de seu
                Livro-coletânea de capítulos, o congresso científico
                internacional anual, o selo de qualidade em extensão
                universitária, dentre outras ações de convergência entre a
                Academia e os Povos Tradicionais.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/quem-somos/pesquisadores-participantes">
                <div className="h-full rounded-lg bg-primary/10 p-6 text-center transition-all hover:shadow-xl">
                  <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold text-lg">Pesquisadores</h3>
                  <p className="text-muted-foreground text-sm">
                    Rede de colaboração internacional
                  </p>
                </div>
              </Link>
              <Link href="/quem-somos/periodico-e-revistas-parceiras">
                <div className="h-full rounded-lg bg-primary/10 p-6 text-center transition-all hover:shadow-xl">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold text-lg">Publicações</h3>
                  <p className="text-muted-foreground text-sm">
                    Livros e artigos científicos
                  </p>
                </div>
              </Link>
              <Link href="/quem-somos/congresso-cientifico-internacional">
                <div className="rounded-lg bg-primary/10 p-6 text-center transition-all hover:shadow-xl">
                  <Globe className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold text-lg">Eventos</h3>
                  <p className="text-muted-foreground text-sm">
                    Congresso internacional anual
                  </p>
                </div>
              </Link>
              <Link href="/noticias">
                <div className="h-full rounded-lg bg-primary/10 p-6 text-center transition-all hover:shadow-xl">
                  <Newspaper className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold text-lg">Notícias</h3>
                  <p className="text-muted-foreground text-sm">
                    Acompanhe nossas atualizações
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-14">
          <h2 className="title-2 text-center">
            Missão, valores, objetivos e grandes desafios da RedeCT 🎯
          </h2>

          <MissaoValoresTabs />
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <RedNavigationCard href="/quem-somos/parceiros-e-financiadores">
            <h2 className="title-3 flex items-center gap-2">
              <Handshake />
              Parceiros e financiadores
            </h2>
          </RedNavigationCard>
          <RedNavigationCard href="/noticias">
            <h2 className="title-3 flex items-center gap-2">
              <Newspaper />
              Últimas notícias
            </h2>
          </RedNavigationCard>
        </div>
      </main>
    </>
  )
}
