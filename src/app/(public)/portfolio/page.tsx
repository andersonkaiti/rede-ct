import type { Metadata } from 'next'

import PortfolioCard from './_components/portfolio-card'
import { portfolioItems } from './_constants/portfolio-items'

export const metadata: Metadata = {
  title: 'Portfólio - RedeCT',
  description:
    'Conheça os projetos e iniciativas da Rede de Ciência e Tecnologia (RedeCT)',
  keywords: 'RedeCT, portfólio, ciência, tecnologia, pesquisa, inovação',
}

export default function PortfolioPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section>
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h1 className="title-2">Portfólio RedeCT</h1>
            <p className="text-muted-foreground">
              Explore nossos projetos e iniciativas que conectam ciência,
              tecnologia e sociedade. Cada seção representa um pilar fundamental
              do nosso trabalho de difusão científica e inovação.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
