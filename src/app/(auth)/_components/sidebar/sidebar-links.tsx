import { Award, Banknote, File, History, Newspaper } from "lucide-react";
import { NavigationLink } from "types/navigation-link";

export const sidebarLinks: NavigationLink[] = [
  {
    label: "Notícias",
    path: "/area-restrita/noticias",
    icon: Newspaper,
  },
  {
    label: "Pendências",
    path: "/area-restrita/pendencias",
    icon: Banknote,
  },
  {
    label: "Arquivos",
    icon: File,
    children: [
      {
        label: "Certificados",
        path: "/area-restrita/certificados",
        icon: Award,
      },
      {
        label: "Histórico",
        path: "/area-restrita/historico-de-contribuicoes",
        icon: History,
      },
    ],
  },
];
