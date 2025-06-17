import * as Icons from "lucide-react";
import { NavigationLink as NavigationLinkType } from "types/navigation-link";

export const navigationLinks: NavigationLinkType[] = [
  {
    path: "/",
    label: "Home",
    icon: Icons.Home,
  },
  {
    label: "Quem Somos",
    children: [
      {
        path: "/quem-somos/apresentacao-e-historia",
        label: "Apresentação e História",
        icon: Icons.Info,
      },
      {
        path: "/quem-somos/equipe-de-gestao",
        label: "Equipe de Gestão",
        icon: Icons.Users,
      },
      {
        path: "/quem-somos/pesquisadores-participantes",
        label: "Pesquisadores Participantes",
        icon: Icons.GraduationCap,
      },
      {
        path: "/quem-somos/eixos-tematicos-permanentes",
        label: "Eixos Temáticos Permanentes",
        icon: Icons.BookOpen,
      },
      {
        path: "/quem-somos/regimento-e-atas",
        label: "Regimento e Atas",
        icon: Icons.FileText,
      },
      {
        path: "/quem-somos/parceiros-e-financiadores",
        label: "Parceiros e Financiadores",
        icon: Icons.UsersRound,
      },
      {
        path: "/quem-somos/transparencia-e-controle-social",
        label: "Transparência e Controle Social",
        icon: Icons.Search,
      },
      {
        path: "/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais",
        label: "Instituto de Pesquisas Amazônicas e de Povos Tradicionais",
        icon: Icons.Landmark,
      },
    ],
  },
  {
    label: "Divisão Científica",
    children: [
      {
        path: "/divisao-cientifica/congressos",
        label: "Congressos",
        icon: Icons.Globe,
      },
      {
        path: "/divisao-cientifica/webinario-permanente",
        label: "Webinário Permanente",
        icon: Icons.Network,
      },
      {
        path: "/divisao-cientifica/cursos-e-capacitacoes",
        label: "Cursos e Capacitações",
        icon: Icons.GraduationCap,
      },
      {
        path: "/divisao-cientifica/disciplinas-e-cursos-de-pos-graduacao",
        label: "Disciplinas e cursos de pós-graduação",
        icon: Icons.BookOpen,
      },
      {
        path: "/divisao-cientifica/selo-de-qualidade-em-extensao-universitaria",
        label: "Selo de Qualidade em Extensão Universitária",
        icon: Icons.Star,
      },
      {
        path: "/divisao-cientifica/calendario-de-eventos",
        label: "Calendário de Eventos",
        icon: Icons.ScrollText,
      },
    ],
  },
  {
    label: "Publicações",
    children: [
      {
        path: "/publicacoes/periodico-e-revistas-parceiras",
        label: "Periódico da RedeCT e Revistas Parceiras",
        icon: Icons.FileText,
      },
      {
        path: "/publicacoes/livros-da-redect",
        label: "Coletânea da RedeCT (Livro da RedeCT)",
        icon: Icons.BookOpen,
      },
      {
        path: "/publicacoes/livros-e-capitulos",
        label: "Livros e Capítulos de Interesse",
        icon: Icons.BookOpen,
      },
      {
        path: "/publicacoes/artigos-cientificos",
        label: "Artigos Científicos de Interesse",
        icon: Icons.FileText,
      },
    ],
  },

  {
    label: "Lojas e Oportunidades",
    children: [
      {
        path: "/lojas-e-oportunidades/loja-da-redect",
        label: "Loja da RedeCT",
        icon: Icons.Store,
      },
      {
        path: "/lojas-e-oportunidades/gt-de-indicadores-tradicionais",
        label: "GT Indicadores de Origem Tradicional",
        icon: Icons.BarChart2,
      },
      {
        path: "/lojas-e-oportunidades/editais-e-oportunidades",
        label: "Editais e Oportunidades",
        icon: Icons.FilePlus,
      },
    ],
  },
  {
    path: "/portfolio",
    label: "Portfólio",
    // children: [
    //   {
    //     path: "/portfolio/legislacoes-mapas",
    //     label: "Legislações",
    //     icon: Icons.ScrollText,
    //   },
    //   {
    //     path: "/portfolio/legislacoes-mapas",
    //     label: "Mapas",
    //     icon: Icons.Map,
    //   },
    //   {
    //     path: "/portfolio/povos-originarios",
    //     label: "Povos Originários",
    //     icon: Icons.Users,
    //   },
    //   {
    //     path: "/portfolio/comunidades-tradicionais",
    //     label: "Comunidades Tradicionais",
    //     icon: Icons.UsersRound,
    //   },
    //   {
    //     path: "/portfolio/grupos-pesquisa",
    //     label: "Grupos de Pesquisa",
    //     icon: Icons.Network,
    //   },
    //   {
    //     path: "/portfolio/redes-e-coletivos",
    //     label: "Redes e Coletivos",
    //     icon: Icons.Network,
    //   },
    //   {
    //     path: "/portfolio/museus-espacos",
    //     label: "Museus e Espaços Museológicos",
    //     icon: Icons.GalleryHorizontal,
    //   },
    //   {
    //     path: "/portfolio/destaques-redect",
    //     label: "Destaques RedeCT",
    //     icon: Icons.Star,
    //   },
    //   {
    //     path: "/portfolio/centro-de-referencia-unesp",
    //     label: "Centro de Referência UNESP",
    //     icon: Icons.Building,
    //   },
    // ],
  },
  {
    path: "/noticias",
    label: "Notícias",
    icon: Icons.Newspaper,
  },
];
