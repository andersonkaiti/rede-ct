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
        path: "/quem-somos/apresentacao-e-historia",
        label: "Apresentação e História",
        icon: Info,
      },
      {
        path: "/quem-somos/missao-valores-e-objetivos",
        label: "Missão, Valores e Objetivos",
        icon: ScrollText,
      },
      {
        path: "/quem-somos/equipe-de-gestao",
        label: "Equipe de Gestão",
        icon: Users,
      },
      {
        path: "/quem-somos/pesquisadores-participantes",
        label: "Pesquisadores Participantes",
        icon: GraduationCap,
      },
      {
        path: "/quem-somos/eixos-tematicos-permanentes",
        label: "Eixos Temáticos Permanentes",
        icon: BookOpen,
      },
      {
        path: "/quem-somos/regimento-e-atas",
        label: "Regimento e Atas",
        icon: FileText,
      },
      {
        path: "/quem-somos/parceiros-e-financiadores",
        label: "Parceiros e Financiadores",
        icon: UsersRound,
      },
      {
        path: "/quem-somos/transparencia-e-controle-social",
        label: "Transparência e Controle Social",
        icon: Search,
      },
      {
        path: "/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais",
        label: "Instituto de Pesquisas Amazônicas e de Povos Tradicionais",
        icon: Landmark,
      },
    ],
  },
  {
    label: "DIVISÃO CIENTÍFICA",
    children: [
      {
        path: "/divisao-cientifica/congresso-cientifico-internacional",
        label: "Congresso Científico Internacional",
        icon: Globe,
      },
      {
        path: "/divisao-cientifica/congressos-regionais",
        label: "Congressos Regionais",
        icon: Map,
      },
      {
        path: "/divisao-cientifica/webinario-permanente",
        label: "Webinário Permanente",
        icon: Network,
      },
      {
        path: "/divisao-cientifica/cursos-e-capacitacoes",
        label: "Cursos e Capacitações",
        icon: GraduationCap,
      },
      {
        path: "/divisao-cientifica/disciplinas-e-cursos-de-pos-graduacao",
        label: "Disciplinas e cursos de pós-graduação",
        icon: BookOpen,
      },
      {
        path: "/divisao-cientifica/selo-de-qualidade-em-extensao-universitaria",
        label: "Selo de Qualidade em Extensão Universitária",
        icon: Star,
      },
      {
        path: "/divisao-cientifica/calendario-de-eventos",
        label: "Calendário de Eventos",
        icon: ScrollText,
      },
    ],
  },
  {
    label: "PUBLICAÇÕES",
    children: [
      {
        path: "/publicacoes/periodico-e-revistas-parceiras",
        label: "Periódico da RedeCT e Revistas Parceiras",
        icon: FileText,
      },
      {
        path: "/publicacoes/livros-da-redect",
        label: "Coletânea da RedeCT (Livro da RedeCT)",
        icon: BookOpen,
      },
      {
        path: "/publicacoes/livros-e-capitulos",
        label: "Livros e Capítulos de Interesse",
        icon: BookOpen,
      },
      {
        path: "/publicacoes/artigos-cientificos",
        label: "Artigos Científicos de Interesse",
        icon: FileText,
      },
      {
        path: "/publicacoes/documentarios",
        label: "Documentários Publicados",
        icon: GalleryHorizontal,
      },
      {
        path: "/publicacoes/buscador-por-assunto",
        label: "Buscador por Assunto",
        icon: Search,
      },
    ],
  },
  {
    label: "PORTFÓLIO",
    children: [
      {
        path: "/portfolio/legislacoes",
        label: "Legislações",
        icon: ScrollText,
      },
      {
        path: "/portfolio/mapas",
        label: "Mapas",
        icon: Map,
      },
      {
        path: "/portfolio/povos-originarios",
        label: "Povos Originários",
        icon: Users,
      },
      {
        path: "/portfolio/comunidades-tradicionais",
        label: "Comunidades Tradicionais",
        icon: UsersRound,
      },
      {
        path: "/portfolio/grupos-de-pesquisa",
        label: "Grupos de Pesquisa",
        icon: Network,
      },
      {
        path: "/portfolio/redes-e-coletivos",
        label: "Redes e Coletivos",
        icon: Network,
      },
      {
        path: "/portfolio/museus-e-espacos-museologicos",
        label: "Museus e Espaços Museológicos",
        icon: GalleryHorizontal,
      },
      {
        path: "/portfolio/destaques-redect",
        label: "Destaques RedeCT",
        icon: Star,
      },
      {
        path: "/portfolio/centro-de-referencia-unesp",
        label: "Centro de Referência UNESP",
        icon: Building,
      },
    ],
  },
  {
    label: "LOJAS E OPORTUNIDADES",
    children: [
      {
        path: "/lojas-e-oportunidades/loja-da-redect",
        label: "Loja da RedeCT",
        icon: Store,
      },
      {
        path: "/lojas-e-oportunidades/gt-de-indicadores-tradicionais",
        label: "GT Indicadores de Origem Tradicional",
        icon: BarChart2,
      },
      {
        path: "/lojas-e-oportunidades/editais-e-oportunidades",
        label: "Editais e Oportunidades",
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
