import * as Icons from "lucide-react";
import { NavigationLink } from "types/navigation-link";

export const sidebarLinks: NavigationLink[] = [
  {
    label: "Notícias",
    path: "/area-restrita/noticias",
    icon: Icons.Newspaper,
  },
  {
    label: "Portfólio",
    path: "/area-restrita/portfolio",
    icon: Icons.FileText,
  },
  {
    label: "Histórico",
    path: "/area-restrita/historico-de-contribuicoes",
    icon: Icons.History,
  },
  {
    label: "Arquivos",
    icon: Icons.File,
    children: [
      {
        label: "Certificados",
        path: "/area-restrita/certificados",
        icon: Icons.Award,
      },
      {
        label: "Pendências",
        path: "/area-restrita/pendencias",
        icon: Icons.Banknote,
      },
    ],
  },
  {
    label: "ETPs",
    path: "/area-restrita/etps",
    icon: Icons.BookOpen,
  },
  {
    label: "Equipes",
    icon: Icons.Users,
    children: [
      {
        label: "Equipe de Gestão",
        path: "/area-restrita/equipe-de-gestao",
        icon: Icons.Users,
      },
      {
        label: "Comitê Legitimador",
        path: "/area-restrita/comite-legitimador",
        icon: Icons.Search,
      },
      {
        label: "Equipe SDHC",
        path: "/area-restrita/equipe-sdhc",
        icon: Icons.Earth,
      },
      {
        label: "Grupo de Pesquisa",
        path: "/area-restrita/grupo-de-pesquisa",
        icon: Icons.Network,
      },
    ],
  },
  {
    label: "Pesquisadores",
    icon: Icons.GraduationCap,
    children: [
      {
        label: "Pesquisadores",
        path: "/area-restrita/pesquisadores/pesquisadores-participantes",
        icon: Icons.GraduationCap,
      },
      {
        label: "In Memoriam",
        path: "/area-restrita/pesquisadores/in-memoriam",
        icon: Icons.Heart,
      },
    ],
  },
  {
    label: "Regimentos e Atas",
    path: "/area-restrita/regimentos-e-atas",
    icon: Icons.FileText,
  },
  {
    label: "Parceiros e Financiadores",
    path: "/area-restrita/parceiros-e-financiadores",
    icon: Icons.Handshake,
  },
  {
    label: "Congressos",
    icon: Icons.BookOpen,
    children: [
      {
        label: "Internacionais",
        path: "/area-restrita/congressos/cientificos-internacionais",
        icon: Icons.Globe,
      },
      {
        label: "Regionais",
        path: "/area-restrita/congressos/regionais",
        icon: Icons.Map,
      },
    ],
  },
  {
    label: "Cursos",
    icon: Icons.BookOpen,
    children: [
      {
        label: "Webinários",
        path: "/area-restrita/cursos/webinarios",
        icon: Icons.Network,
      },
      {
        label: "Capacitações",
        path: "/area-restrita/cursos/capacitacoes",
        icon: Icons.GraduationCap,
      },
      {
        label: "Pós-Graduações",
        path: "/area-restrita/cursos/pos-graduacoes",
        icon: Icons.BookOpen,
      },
    ],
  },
  {
    label: "Livros",
    icon: Icons.BookOpen,
    children: [
      {
        label: "Revistas",
        path: "/area-restrita/livros/revistas",
        icon: Icons.BookOpen,
      },
      {
        label: "Capítulos",
        path: "/area-restrita/livros/capitulos-de-livros",
        icon: Icons.BookOpen,
      },
      {
        label: "Artigos",
        path: "/area-restrita/livros/artigos",
        icon: Icons.FileText,
      },
    ],
  },
  {
    label: "Editais",
    icon: Icons.FilePlus,
    path: "/area-restrita/editais",
  },
  {
    label: "Legislações",
    icon: Icons.ScrollText,
    path: "/area-restrita/legislacoes",
  },
  {
    label: "Museus",
    icon: Icons.GalleryHorizontal,
    path: "/area-restrita/museus",
  },
  {
    label: "Destaques RedeCT",
    icon: Icons.Star,
    path: "/area-restrita/destaques-redect",
  },
  {
    label: "Centro de Referência UNESP",
    icon: Icons.Building,
    path: "/area-restrita/centro-de-referencia-unesp",
  },
];
