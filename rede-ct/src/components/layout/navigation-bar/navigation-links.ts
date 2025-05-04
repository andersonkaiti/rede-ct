import {
  Home,
  Info,
  Users,
  ScrollText,
  GraduationCap,
  BookOpen,
  FileText,
  Search,
  Landmark,
  Map,
  Globe,
  UsersRound,
  Network,
  GalleryHorizontal,
  Star,
  Building,
  Store,
  BarChart2,
  FilePlus,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink =
  | {
      path: string;
      label: string;
      icon: LucideIcon;
      children?: never;
    }
  | {
      path?: never;
      label: string;
      icon?: never;
      children: NavLink[];
    };

export const navLinks: NavLink[] = [
  {
    path: "/",
    label: "HOME",
    icon: Home,
  },
  {
    label: "QUEM SOMOS",
    children: [
      {
        path: "/quem-somos",
        label: "Apresentação e História",
        icon: Info,
      },
      {
        path: "/quem-somos",
        label: "Missão, Valores e Objetivos",
        icon: ScrollText,
      },
      {
        path: "/quem-somos",
        label: "Equipe de Gestão",
        icon: Users,
      },
      {
        path: "/quem-somos",
        label: "Pesquisadores Participantes",
        icon: GraduationCap,
      },
      {
        path: "/quem-somos",
        label: "Eixos Temáticos Permanentes",
        icon: BookOpen,
      },
      {
        path: "/quem-somos",
        label: "Regimento e Atas",
        icon: FileText,
      },
      {
        path: "/quem-somos",
        label: "Parceiros e Financiadores",
        icon: UsersRound,
      },
      {
        path: "/quem-somos",
        label: "Transparência e Controle Social",
        icon: Search,
      },
      {
        path: "/quem-somos",
        label: "Instituto de Pesquisas Amazônicas",
        icon: Landmark,
      },
    ],
  },
  {
    label: "DIVISÃO CIENTÍFICA",
    children: [
      {
        path: "/divisao-cientifica",
        label: "Congresso Internacional",
        icon: Globe,
      },
      {
        path: "/divisao-cientifica",
        label: "Congressos Regionais",
        icon: Map,
      },
      {
        path: "/divisao-cientifica",
        label: "Webinário Permanente",
        icon: Network,
      },
      {
        path: "/divisao-cientifica",
        label: "Cursos e Capacitações",
        icon: GraduationCap,
      },
      {
        path: "/divisao-cientifica",
        label: "Cursos de Pós-graduação",
        icon: BookOpen,
      },
      {
        path: "/divisao-cientifica",
        label: "Selo de Extensão Universitária",
        icon: Star,
      },
      {
        path: "/divisao-cientifica",
        label: "Calendário de Eventos",
        icon: ScrollText,
      },
    ],
  },
  {
    label: "PUBLICAÇÕES",
    children: [
      {
        path: "/publicacoes",
        label: "Periódico e Revistas Parceiras",
        icon: FileText,
      },
      {
        path: "/publicacoes",
        label: "Livro da RedeCT",
        icon: BookOpen,
      },
      {
        path: "/publicacoes",
        label: "Livros e Capítulos",
        icon: BookOpen,
      },
      {
        path: "/publicacoes",
        label: "Artigos Científicos",
        icon: FileText,
      },
      {
        path: "/publicacoes",
        label: "Documentários",
        icon: GalleryHorizontal,
      },
      {
        path: "/publicacoes",
        label: "Buscador por Assunto",
        icon: Search,
      },
    ],
  },
  {
    label: "PORTFÓLIO",
    children: [
      {
        path: "/portfolio",
        label: "Legislações",
        icon: ScrollText,
      },
      {
        path: "/portfolio",
        label: "Mapas",
        icon: Map,
      },
      {
        path: "/portfolio",
        label: "Povos Originários",
        icon: Users,
      },
      {
        path: "/portfolio",
        label: "Comunidades Tradicionais",
        icon: UsersRound,
      },
      {
        path: "/portfolio",
        label: "Grupos de Pesquisa",
        icon: Network,
      },
      {
        path: "/portfolio",
        label: "Redes e Coletivos",
        icon: Network,
      },
      {
        path: "/portfolio",
        label: "Museus e Espaços Culturais",
        icon: GalleryHorizontal,
      },
      {
        path: "/portfolio",
        label: "Destaques RedeCT",
        icon: Star,
      },
      {
        path: "/portfolio",
        label: "Centro de Referência UNESP",
        icon: Building,
      },
    ],
  },
  {
    label: "LOJAS E OPORTUNIDADES",
    children: [
      {
        path: "/lojas-e-oportunidades",
        label: "Loja da RedeCT",
        icon: Store,
      },
      {
        path: "/lojas-e-oportunidades",
        label: "GT de Indicadores Tradicionais",
        icon: BarChart2,
      },
      {
        path: "/lojas-e-oportunidades",
        label: "Editais e Chamadas",
        icon: FilePlus,
      },
    ],
  },
  {
    path: "/noticias",
    label: "NOTÍCIAS",
    icon: Newspaper,
  },
];
