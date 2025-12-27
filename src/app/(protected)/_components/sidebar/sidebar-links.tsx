import {
  Award,
  Book,
  BookOpen,
  Building,
  Building2,
  CircleDollarSign,
  Earth,
  File,
  FileText,
  GalleryHorizontal,
  Globe,
  GraduationCap,
  HandCoins,
  Handshake,
  Heart,
  History,
  Map as MapIcon,
  Network,
  Newspaper,
  ScrollText,
  Search,
  Star,
  Users,
} from 'lucide-react'
import type { NavigationLink } from '@/@types/navigation-link'

export const sidebarLinks: NavigationLink[] = [
  {
    label: 'Notícias',
    path: '/area-restrita/noticias',
    icon: Newspaper,
  },
  {
    label: 'Histórico',
    path: '/area-restrita/historico-de-contribuicoes',
    icon: History,
  },
  {
    label: 'Arquivos',
    icon: File,
    children: [
      {
        label: 'Certificados',
        path: '/area-restrita/certificados',
        icon: Award,
      },
      {
        label: 'Pendências',
        path: '/area-restrita/pendencias',
        icon: CircleDollarSign,
      },
    ],
  },
  {
    label: 'Institucional',
    icon: Network,
    isProtected: true,
    children: [
      {
        label: 'Regimentos',
        path: '/area-restrita/institucional/regimentos',
        icon: FileText,
      },
      {
        label: 'Reuniões',
        path: '/area-restrita/institucional/reunioes',
        icon: Users,
      },
    ],
  },
  {
    label: 'ETPs',
    path: '/area-restrita/etps',
    icon: BookOpen,
    isProtected: true,
  },
  {
    label: 'Equipes',
    icon: Users,
    isProtected: true,
    children: [
      {
        label: 'Equipe de Gestão',
        path: '/area-restrita/equipe-de-gestao',
        icon: Users,
      },
      {
        label: 'Comitê Legitimador',
        path: '/area-restrita/comite-legitimador',
        icon: Search,
      },
      {
        label: 'Equipe SDHC',
        path: '/area-restrita/equipe-sdhc',
        icon: Earth,
      },
    ],
  },
  {
    label: 'Pesquisadores',
    icon: GraduationCap,
    isProtected: true,
    children: [
      {
        label: 'Pesquisadores',
        path: '/area-restrita/pesquisadores-participantes',
        icon: GraduationCap,
      },
      {
        label: 'In Memoriam',
        path: '/area-restrita/in-memoriam',
        icon: Heart,
      },
    ],
  },
  {
    label: 'Parceiros e Financiadores',
    path: '/area-restrita/parceiros-e-financiadores',
    isProtected: true,
    icon: Handshake,
  },
  {
    label: 'Congressos',
    icon: Building2,
    isProtected: true,
    children: [
      {
        label: 'Internacionais',
        path: '/area-restrita/congressos-cientificos-internacionais',
        icon: Globe,
      },
      {
        label: 'Regionais',
        path: '/area-restrita/congressos-regionais',
        icon: MapIcon,
      },
    ],
  },
  {
    label: 'Cursos',
    icon: BookOpen,
    isProtected: true,
    children: [
      {
        label: 'Webinários',
        path: '/area-restrita/webinarios',
        icon: Network,
      },
      {
        label: 'Cursos',
        path: '/area-restrita/cursos',
        icon: GraduationCap,
      },
      {
        label: 'Pós-Graduações',
        path: '/area-restrita/pos-graduacoes',
        icon: BookOpen,
      },
    ],
  },
  {
    label: 'Eventos',
    icon: ScrollText,
    isProtected: true,
    path: '/area-restrita/eventos',
  },
  {
    label: 'Livros',
    icon: Book,
    isProtected: true,
    children: [
      {
        label: 'Revistas',
        path: '/area-restrita/revistas',
        icon: BookOpen,
      },
      {
        label: 'Volumes',
        path: '/area-restrita/volumes-de-livros',
        icon: BookOpen,
      },
      {
        label: 'Artigos',
        path: '/area-restrita/artigos',
        icon: FileText,
      },
    ],
  },
  {
    label: 'Lojas e oportunidades',
    icon: FileText,
    isProtected: true,
    children: [
      {
        label: 'Grupo de Trabalho',
        icon: Network,
        isProtected: true,
        path: '/area-restrita/grupo-de-trabalho',
      },
    ],
  },

  {
    label: 'Portfólio',
    path: '/area-restrita/portfolio',
    icon: FileText,
    isProtected: true,
    children: [
      {
        label: 'Legislações',
        icon: ScrollText,
        isProtected: true,
        path: '/area-restrita/portfolio/legislacoes',
      },
      {
        label: 'Museus',
        icon: GalleryHorizontal,
        isProtected: true,
        path: '/area-restrita/portfolio/museus',
      },
      {
        label: 'Destaques RedeCT',
        icon: Star,
        isProtected: true,
        path: '/area-restrita/portfolio/destaques-da-redect',
      },
      {
        label: 'Centro de Referência UNESP',
        icon: Building,
        isProtected: true,
        path: '/area-restrita/portfolio/centro-de-referencia-unesp',
      },
      {
        label: 'Grupo de Pesquisa',
        icon: Users,
        isProtected: true,
        path: '/area-restrita/portfolio/grupo-de-pesquisa',
      },
    ],
  },
  {
    label: 'Usuários',
    path: '/area-restrita/usuarios',
    icon: Users,
    isProtected: true,
  },
  {
    label: 'Financeiro',
    icon: HandCoins,
    isProtected: true,
    children: [
      {
        label: 'Extratos Detalhados',
        icon: FileText,
        isProtected: true,
        path: '/area-restrita/financeiro/extratos-detalhados',
      },
    ],
  },
]
