import { BookOpen, Globe, Newspaper, Users } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    href: '/quem-somos/pesquisadores-participantes',
    icon: Users,
    title: 'Pesquisadores',
    description: 'Rede de colaboração internacional',
  },
  {
    href: '/publicacoes/periodico-e-revistas-parceiras',
    icon: BookOpen,
    title: 'Publicações',
    description: 'Livros e artigos científicos',
  },
  {
    href: '/divisao-cientifica/calendario-de-eventos',
    icon: Globe,
    title: 'Eventos',
    description: 'Calendário de eventos',
  },
  {
    href: '/noticias',
    icon: Newspaper,
    title: 'Notícias',
    description: 'Acompanhe nossas atualizações',
  },
]

export function Presentation() {
  return (
    <section className="space-y-12">
      <h2 className="title-2 text-center font-semibold">
        Uma breve apresentação da RedeCT
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed">
          <p className="text-justify">
            A <strong>RedeCT</strong> é uma rede independente que reúne
            pesquisadores — professores, estudantes, povos tradicionais e demais
            interessados — que atuam acadêmica e cientificamente em colaboração
            com os Povos Tradicionais (indígenas, quilombolas, caiçaras,
            ribeirinhos, povos de terreiro, faxinalenses, geraizeiros,
            pantaneiros, quebradeiras de coco babaçu, dentre outros).
          </p>
          <p className="text-justify">
            Mantida pela OSCIP Instituto de Pesquisas Amazônicas e de Povos
            Tradicionais (criada em 2002), a RedeCT desenvolve ações como o
            webinário permanente, a publicação anual de seu livro-coletânea de
            capítulos, o congresso científico internacional anual, o selo de
            qualidade em extensão universitária, entre outras iniciativas que
            promovem a convergência entre a Academia e os Povos Tradicionais.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {features.map(({ href, icon: Icon, title, description }) => (
            <Link href={href} key={href} passHref>
              <div className="box-border flex h-full cursor-pointer flex-col items-center rounded-lg border border-transparent bg-primary/10 p-6 text-center transition-all hover:border hover:border-primary hover:bg-primary/15 hover:shadow-xl">
                <Icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold text-lg">{title}</h3>
                <span className="text-sm">{description}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
