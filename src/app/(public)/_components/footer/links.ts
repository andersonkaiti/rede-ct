import type {
  NavigationLink,
  NavigationLink as NavigationLinkType,
} from '@/@types/navigation-link'

export const navigationLinks: NavigationLinkType[] = [
  {
    path: '/',
    label: 'Início',
  },
  {
    label: 'Sobre a rede',
    children: [
      {
        path: '/quem-somos/apresentacao-e-historia',
        label: 'Apresentação e História',
      },
      {
        path: '/quem-somos/equipe-de-gestao',
        label: 'Equipe de Gestão',
      },
      {
        path: '/quem-somos/pesquisadores-participantes',
        label: 'Pesquisadores Participantes',
      },
      {
        path: '/quem-somos/eixos-tematicos-permanentes',
        label: 'Eixos Temáticos Permanentes',
      },
      {
        path: '/quem-somos/reunioes-e-atas',
        label: 'Reuniões e Atas',
      },
      {
        path: '/quem-somos/regimentos',
        label: 'Regimentos',
      },
      {
        path: '/quem-somos/parceiros-e-financiadores',
        label: 'Parceiros e Financiadores',
      },
      {
        path: '/quem-somos/transparencia-e-controle-social',
        label: 'Transparência e Controle Social',
      },
      {
        path: '/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais',
        label: 'Instituto de Pesquisas Amazônicas e de Povos Tradicionais',
      },
    ],
  },
  {
    label: 'Divisão científica',
    children: [
      {
        path: '/divisao-cientifica/congressos',
        label: 'Congressos',
      },
      {
        path: '/divisao-cientifica/webinario-permanente',
        label: 'Webinário Permanente',
      },
      {
        path: '/divisao-cientifica/cursos',
        label: 'Cursos',
      },
      {
        path: '/divisao-cientifica/pos-graduacao',
        label: 'Cursos de Pós-Graduação',
      },
      {
        path: '/divisao-cientifica/selo-de-qualidade-em-extensao-universitaria',
        label: 'Selo de Qualidade em Extensão Universitária',
      },
      {
        path: '/divisao-cientifica/calendario-de-eventos',
        label: 'Calendário de Eventos',
      },
    ],
  },
  {
    label: 'Publicações',
    children: [
      {
        path: '/publicacoes/periodico-e-revistas-parceiras',
        label: 'Periódico da RedeCT e Revistas Parceiras',
      },
      {
        path: '/publicacoes/livros-da-redect',
        label: 'Coletânea da RedeCT (Livro da RedeCT)',
      },
      {
        path: '/publicacoes/artigos-cientificos',
        label: 'Artigos Científicos de Interesse',
      },
    ],
  },

  {
    label: 'Lojas e oportunidades',
    children: [
      {
        path: '/lojas-e-oportunidades/loja-da-redect',
        label: 'Loja da RedeCT',
      },
      {
        path: '/lojas-e-oportunidades/gt-de-indicadores-tradicionais',
        label: 'GT Indicadores de Origem Tradicional',
      },
    ],
  },
  {
    label: 'Portfólio',
    children: [
      {
        path: '/portfolio/centro-de-referencia-unesp',
        label: 'Centro de Referência UNESP',
      },
      {
        path: '/portfolio/legislacoes',
        label: 'Legislações',
      },
      {
        path: '/portfolio/grupo-de-pesquisa',
        label: 'Grupos de Pesquisa',
      },
      {
        path: '/portfolio/museus',
        label: 'Museus',
      },
      {
        path: '/portfolio/destaques-da-redect',
        label: 'Destaques RedeCT',
      },
    ],
  },
  {
    path: '/noticias',
    label: 'Notícias',
  },
  {
    label: 'Creditos',
    path: '/creditos',
  },
]

export function getAllLinks() {
  const links: NavigationLink[] = []

  for (const link of navigationLinks) {
    if (link.path) {
      links.push(link)
    }

    if (link.children) {
      for (const child of link.children) {
        if (child.path) {
          links.push(child)
        }
      }
    }
  }

  const middle = Math.ceil(links.length / 2)
  const firstColumn = links.slice(0, middle)
  const secondColumn = links.slice(middle)

  return {
    firstColumn,
    secondColumn,
  }
}
