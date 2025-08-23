import * as Icons from 'lucide-react'
import type {
  NavigationLink,
  NavigationLink as NavigationLinkType,
} from 'types/navigation-link'

export const navigationLinks: NavigationLinkType[] = [
  {
    path: '/',
    label: 'Home',
    icon: Icons.Home,
  },
  {
    label: 'Quem Somos',
    children: [
      {
        path: '/quem-somos/apresentacao-e-historia',
        label: 'Apresentação e História',
        icon: Icons.Info,
      },
      {
        path: '/quem-somos/equipe-de-gestao',
        label: 'Equipe de Gestão',
        icon: Icons.Users,
      },
      {
        path: '/quem-somos/pesquisadores-participantes',
        label: 'Pesquisadores Participantes',
        icon: Icons.GraduationCap,
      },
      {
        path: '/quem-somos/eixos-tematicos-permanentes',
        label: 'Eixos Temáticos Permanentes',
        icon: Icons.BookOpen,
      },
      {
        path: '/quem-somos/regimento-e-atas',
        label: 'Regimento e Atas',
        icon: Icons.FileText,
      },
      {
        path: '/quem-somos/parceiros-e-financiadores',
        label: 'Parceiros e Financiadores',
        icon: Icons.UsersRound,
      },
    ],
  },
  {
    label: 'Divisão Científica',
    children: [
      {
        path: '/divisao-cientifica/congresso-cientifico-internacional',
        label: 'Congresso Científico Internacional',
        icon: Icons.Globe,
      },
      {
        path: '/divisao-cientifica/congressos-regionais',
        label: 'Congressos Regionais',
        icon: Icons.Map,
      },
      {
        path: '/divisao-cientifica/webinario-permanente',
        label: 'Webinário Permanente',
        icon: Icons.Network,
      },
      {
        path: '/divisao-cientifica/cursos-e-capacitacoes',
        label: 'Cursos e Capacitações',
        icon: Icons.GraduationCap,
      },
      {
        path: '/divisao-cientifica/disciplinas-e-cursos-de-pos-graduacao',
        label: 'Disciplinas e cursos de pós-graduação',
        icon: Icons.BookOpen,
      },
      {
        path: '/divisao-cientifica/selo-de-qualidade-em-extensao-universitaria',
        label: 'Selo de Qualidade em Extensão Universitária',
        icon: Icons.Star,
      },
      {
        path: '/divisao-cientifica/calendario-de-eventos',
        label: 'Calendário de Eventos',
        icon: Icons.ScrollText,
      },
    ],
  },
  {
    label: 'Publicações',
    children: [
      {
        path: '/publicacoes/periodico-e-revistas-parceiras',
        label: 'Periódico da RedeCT e Revistas Parceiras',
        icon: Icons.FileText,
      },
      {
        path: '/publicacoes/livros-da-redect',
        label: 'Coletânea da RedeCT (Livro da RedeCT)',
        icon: Icons.BookOpen,
      },
      {
        path: '/publicacoes/livros-e-capitulos',
        label: 'Livros e Capítulos de Interesse',
        icon: Icons.BookOpen,
      },
      {
        path: '/publicacoes/artigos-cientificos',
        label: 'Artigos Científicos de Interesse',
        icon: Icons.FileText,
      },
    ],
  },
  {
    path: '/noticias',
    label: 'Notícias',
    icon: Icons.Newspaper,
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
