import * as Icons from 'lucide-react'
import type { NavigationLink } from 'types/navigation-link'

export const sidebarLinks: NavigationLink[] = [
  {
    label: 'Notícias',
    path: '/area-restrita/noticias',
    icon: Icons.Newspaper,
  },
  {
    label: 'Histórico',
    path: '/area-restrita/historico-de-contribuicoes',
    icon: Icons.History,
  },
  {
    label: 'Arquivos',
    icon: Icons.File,
    children: [
      {
        label: 'Certificados',
        path: '/area-restrita/certificados',
        icon: Icons.Award,
      },
      {
        label: 'Pendências',
        path: '/area-restrita/pendencias',
        icon: Icons.CircleDollarSign,
      },
      {
        label: 'Regimentos e Atas',
        path: '/area-restrita/regimentos-e-atas',
        isProtected: true,
        icon: Icons.FileText,
      },
    ],
  },
  {
    label: 'ETPs',
    path: '/area-restrita/etps',
    icon: Icons.BookOpen,
    isProtected: true,
  },
  {
    label: 'Equipes',
    icon: Icons.Users,
    isProtected: true,
    children: [
      {
        label: 'Equipe de Gestão',
        path: '/area-restrita/equipe-de-gestao',
        icon: Icons.Users,
      },
      {
        label: 'Comitê Legitimador',
        path: '/area-restrita/comite-legitimador',
        icon: Icons.Search,
      },
      {
        label: 'Equipe SDHC',
        path: '/area-restrita/equipe-sdhc',
        icon: Icons.Earth,
      },
    ],
  },
  {
    label: 'Pesquisadores',
    icon: Icons.GraduationCap,
    isProtected: true,
    children: [
      {
        label: 'Pesquisadores',
        path: '/area-restrita/pesquisadores-participantes',
        icon: Icons.GraduationCap,
      },
      {
        label: 'In Memoriam',
        path: '/area-restrita/in-memoriam',
        icon: Icons.Heart,
      },
      {
        label: 'Grupo de Pesquisa',
        path: '/area-restrita/grupo-de-pesquisa',
        icon: Icons.Network,
      },
    ],
  },
  {
    label: 'Parceiros e Financiadores',
    path: '/area-restrita/parceiros-e-financiadores',
    isProtected: true,
    icon: Icons.Handshake,
  },
  {
    label: 'Congressos',
    icon: Icons.Building2,
    isProtected: true,
    children: [
      {
        label: 'Internacionais',
        path: '/area-restrita/congressos-cientificos-internacionais',
        icon: Icons.Globe,
      },
      {
        label: 'Regionais',
        path: '/area-restrita/congressos-regionais',
        icon: Icons.Map,
      },
    ],
  },
  {
    label: 'Cursos',
    icon: Icons.BookOpen,
    isProtected: true,
    children: [
      {
        label: 'Webinários',
        path: '/area-restrita/webinarios',
        icon: Icons.Network,
      },
      {
        label: 'Capacitações',
        path: '/area-restrita/capacitacoes',
        icon: Icons.GraduationCap,
      },
      {
        label: 'Pós-Graduações',
        path: '/area-restrita/pos-graduacoes',
        icon: Icons.BookOpen,
      },
    ],
  },
  {
    label: 'Livros',
    icon: Icons.Book,
    isProtected: true,
    children: [
      {
        label: 'Revistas',
        path: '/area-restrita/revistas',
        icon: Icons.BookOpen,
      },
      {
        label: 'Capítulos',
        path: '/area-restrita/capitulos-de-livros',
        icon: Icons.BookOpen,
      },
      {
        label: 'Artigos',
        path: '/area-restrita/artigos',
        icon: Icons.FileText,
      },
    ],
  },
  {
    label: 'Lojas e oportunidades',
    icon: Icons.FileText,
    isProtected: true,
    children: [
      {
        label: 'Editais',
        icon: Icons.FilePlus,
        isProtected: true,
        path: '/area-restrita/editais',
      },
    ],
  },
  {
    label: 'Portfólio',
    path: '/area-restrita/portfolio',
    icon: Icons.FileText,
    isProtected: true,
    children: [
      {
        label: 'Legislações',
        icon: Icons.ScrollText,
        isProtected: true,
        path: '/area-restrita/legislacoes',
      },
      {
        label: 'Museus',
        icon: Icons.GalleryHorizontal,
        isProtected: true,
        path: '/area-restrita/museus',
      },
      {
        label: 'Destaques RedeCT',
        icon: Icons.Star,
        isProtected: true,
        path: '/area-restrita/destaques-redect',
      },
      {
        label: 'Centro de Referência UNESP',
        icon: Icons.Building,
        isProtected: true,
        path: '/area-restrita/centro-de-referencia-unesp',
      },
    ],
  },
]
