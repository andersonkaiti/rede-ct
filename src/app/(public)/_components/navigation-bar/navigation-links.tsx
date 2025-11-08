import {
	BarChart2,
	BookOpen,
	FilePlus,
	FileText,
	Globe,
	GraduationCap,
	Home,
	Info,
	Landmark,
	Network,
	Newspaper,
	ScrollText,
	Search,
	Star,
	Store,
	Users,
	UsersRound,
} from 'lucide-react'
import type { NavigationLink as NavigationLinkType } from '@/@types/navigation-link'

export const navigationLinks: NavigationLinkType[] = [
	{
		path: '/',
		label: 'Início',
		icon: Home,
	},
	{
		label: 'Sobre a rede',
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
				path: '/quem-somos/regimentos',
				label: 'Regimentos',
				icon: FileText,
			},
			{
				path: '/quem-somos/parceiros-e-financiadores',
				label: 'Parceiros e Financiadores',
				icon: UsersRound,
			},
			{
				path: '/quem-somos/transparencia-e-controle-social',
				label: 'Transparência e Controle Social',
				icon: Search,
			},
			{
				path: '/quem-somos/instituto-de-pesquisas-amazonicas-e-de-povos-tradicionais',
				label: 'Instituto de Pesquisas Amazônicas e de Povos Tradicionais',
				icon: Landmark,
			},
		],
	},
	{
		label: 'Divisão científica',
		children: [
			{
				path: '/divisao-cientifica/congressos',
				label: 'Congressos',
				icon: Globe,
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
		label: 'Lojas e oportunidades',
		children: [
			{
				path: '/lojas-e-oportunidades/loja-da-redect',
				label: 'Loja da RedeCT',
				icon: Store,
			},
			{
				path: '/lojas-e-oportunidades/gt-de-indicadores-tradicionais',
				label: 'GT Indicadores de Origem Tradicional',
				icon: BarChart2,
			},
			{
				path: '/lojas-e-oportunidades/editais-e-oportunidades',
				label: 'Editais e Oportunidades',
				icon: FilePlus,
			},
		],
	},
	{
		path: '/portfolio',
		label: 'Portfólio',
		// children: [
		//   {
		//     path: "/portfolio/legislacoes-mapas",
		//     label: "Legislações",
		//     icon: ScrollText,
		//   },
		//   {
		//     path: "/portfolio/legislacoes-mapas",
		//     label: "Mapas",
		//     icon: Map,
		//   },
		//   {
		//     path: "/portfolio/povos-originarios",
		//     label: "Povos Originários",
		//     icon: Users,
		//   },
		//   {
		//     path: "/portfolio/comunidades-tradicionais",
		//     label: "Comunidades Tradicionais",
		//     icon: UsersRound,
		//   },
		//   {
		//     path: "/portfolio/grupos-pesquisa",
		//     label: "Grupos de Pesquisa",
		//     icon: Network,
		//   },
		//   {
		//     path: "/portfolio/redes-e-coletivos",
		//     label: "Redes e Coletivos",
		//     icon: Network,
		//   },
		//   {
		//     path: "/portfolio/museus-espacos",
		//     label: "Museus e Espaços Museológicos",
		//     icon: GalleryHorizontal,
		//   },
		//   {
		//     path: "/portfolio/destaques-redect",
		//     label: "Destaques RedeCT",
		//     icon: Star,
		//   },
		//   {
		//     path: "/portfolio/centro-de-referencia-unesp",
		//     label: "Centro de Referência UNESP",
		//     icon: Building,
		//   },
		// ],
	},
	{
		path: '/noticias',
		label: 'Notícias',
		icon: Newspaper,
	},
]
