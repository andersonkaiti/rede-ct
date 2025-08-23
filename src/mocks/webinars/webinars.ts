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
]

export async function getWebinars(): Promise<IWebinar[]> {
  return await new Promise((resolve) => resolve(webinars))
}
