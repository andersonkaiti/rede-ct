import {
  BookOpen,
  FileText,
  Globe,
  GraduationCap,
  Home,
  Info,
  Map as MapIcon,
  Network,
  Newspaper,
  ScrollText,
  Star,
  Users,
  UsersRound,
} from 'lucide-react'
import type {
  NavigationLink,
  NavigationLink as NavigationLinkType,
} from '@/@types/navigation-link'

export const navigationLinks: NavigationLinkType[] = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
  },
  {
    label: 'Quem Somos',
    children: [
      {
        path: '/quem-somos/apresentacao-e-historia',
        label: 'Apresentação e História',
        icon: Info,
      },
      {
        path: '/quem-somos/equipe-de-gestao',
        label: 'Equipe de Gestão',
        icon: Users,
      },
      {
        path: '/quem-somos/pesquisadores-participantes',
        label: 'Pesquisadores Participantes',
        icon: GraduationCap,
      },
      {
        path: '/quem-somos/eixos-tematicos-permanentes',
        label: 'Eixos Temáticos Permanentes',
        icon: BookOpen,
      },
      {
        path: '/quem-somos/regimento-e-atas',
        label: 'Regimento e Atas',
        icon: FileText,
      },
      {
        path: '/quem-somos/parceiros-e-financiadores',
        label: 'Parceiros e Financiadores',
        icon: UsersRound,
      },
    ],
  },
  {
    label: 'Divisão Científica',
    children: [
      {
        path: '/divisao-cientifica/congresso-cientifico-internacional',
        label: 'Congresso Científico Internacional',
        icon: Globe,
      },
      {
        path: '/divisao-cientifica/congressos-regionais',
        label: 'Congressos Regionais',
        icon: MapIcon,
      },
      {
        path: '/divisao-cientifica/webinario-permanente',
        label: 'Webinário Permanente',
        icon: Network,
      },
      {
        path: '/divisao-cientifica/cursos-e-capacitacoes',
        label: 'Cursos e Capacitações',
        icon: GraduationCap,
      },
      {
        path: '/divisao-cientifica/disciplinas-e-cursos-de-pos-graduacao',
        label: 'Disciplinas e cursos de pós-graduação',
        icon: BookOpen,
      },
      {
        path: '/divisao-cientifica/selo-de-qualidade-em-extensao-universitaria',
        label: 'Selo de Qualidade em Extensão Universitária',
        icon: Star,
      },
      {
        path: '/divisao-cientifica/calendario-de-eventos',
        label: 'Calendário de Eventos',
        icon: ScrollText,
      },
    ],
  },
  {
    label: 'Publicações',
    children: [
      {
        path: '/publicacoes/periodico-e-revistas-parceiras',
        label: 'Periódico da RedeCT e Revistas Parceiras',
        icon: FileText,
      },
      {
        path: '/publicacoes/livros-da-redect',
        label: 'Coletânea da RedeCT (Livro da RedeCT)',
        icon: BookOpen,
      },
      {
        path: '/publicacoes/livros-e-capitulos',
        label: 'Livros e Capítulos de Interesse',
        icon: BookOpen,
      },
      {
        path: '/publicacoes/artigos-cientificos',
        label: 'Artigos Científicos de Interesse',
        icon: FileText,
      },
    ],
  },
  {
    path: '/noticias',
    label: 'Notícias',
    icon: Newspaper,
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
