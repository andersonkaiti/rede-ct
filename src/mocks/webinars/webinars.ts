export interface IWebinar {
  id: number
  title: string
  description: string
  imageUrl: string
  speakerImageUrl: string
  link: string
  date: string
  time: string
  speakers: string[]
}

const webinars: IWebinar[] = [
  {
    id: 1,
    title:
      'Regimes de conhecimento territorializados: o que nos informa a produção intelectual PCT?',
    description:
      'Descrição detalhada sobre o webinário, incluindo os principais tópicos que serão abordados, objetivos e informações relevantes para os participantes. Não perca esta oportunidade de se atualizar sobre os mais recentes desenvolvimentos na área.',
    imageUrl: '/images/webnario-permanente/webnario.png',
    speakerImageUrl: '/images/webnario-permanente/Avatar.png',
    link: '#',
    date: '09 de Agosto de 2024',
    time: '16:00',
    speakers: ['Profa. Dra. Mônica Celeida Rabelo Nogueira (UNB)'],
  },
  {
    id: 2,
    title: 'Inovação e Sustentabilidade: Desafios para Povos Tradicionais',
    description:
      'Este webinário abordará os desafios e oportunidades para a inovação sustentável em comunidades tradicionais, com foco em experiências de sucesso e políticas públicas.',
    imageUrl: '/images/webnario-permanente/webnario.png',
    speakerImageUrl: '/images/webnario-permanente/Avatar2.png',
    link: '#',
    date: '23 de Agosto de 2024',
    time: '15:00',
    speakers: [
      'Prof. Dr. João Carlos da Silva (UFPA)',
      'Líder Indígena Maria Tupinambá',
    ],
  },
  {
    id: 3,
    title: 'Tecnologias Sociais e o Papel das Universidades',
    description:
      'Uma discussão sobre o desenvolvimento e a implementação de tecnologias sociais em parceria com universidades e comunidades locais.',
    imageUrl: '/images/webnario-permanente/webnario.png',
    speakerImageUrl: '/images/webnario-permanente/Avatar3.png',
    link: '#',
    date: '06 de Setembro de 2024',
    time: '17:30',
    speakers: ['Profa. Dra. Ana Beatriz Oliveira (UFRJ)'],
  },
  {
    id: 4,
    title: 'Educação Intercultural: Experiências e Perspectivas',
    description:
      'O webinário explora práticas de educação intercultural, desafios enfrentados e caminhos para a valorização dos saberes tradicionais.',
    imageUrl: '/images/webnario-permanente/webnario.png',
    speakerImageUrl: '/images/webnario-permanente/Avatar4.png',
    link: '#',
    date: '20 de Setembro de 2024',
    time: '14:00',
    speakers: [
      'Prof. Dr. Carlos Alberto dos Santos (UFAM)',
      'Profa. Dra. Eliane Xukuru (UFPE)',
    ],
  },
  {
    id: 5,
    title: 'Mudanças Climáticas e Povos da Floresta: Impactos e Resistências',
    description:
      'Debate sobre os impactos das mudanças climáticas nas comunidades da floresta e estratégias de resistência e adaptação.',
    imageUrl: '/images/webnario-permanente/webnario.png',
    speakerImageUrl: '/images/webnario-permanente/Avatar5.png',
    link: '#',
    date: '04 de Outubro de 2024',
    time: '16:30',
    speakers: [
      'Líder Quilombola José dos Santos',
      'Profa. Dra. Marina Costa (USP)',
    ],
  },
]

export async function getWebinars(): Promise<IWebinar[]> {
  return await new Promise((resolve) => resolve(webinars))
}
