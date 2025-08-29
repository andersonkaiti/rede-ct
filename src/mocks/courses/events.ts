export interface IEvent {
  id: number
  title: string
  subtitle: string
  subscriptionPeriod: {
    start: string
    end: string
    time: string
  }
  description: string
  href: string
  image: {
    url: string
    alt: string
  }
  status: 'inscricoes-abertas' | 'inscricoes-encerradas'
}

const events: IEvent[] = [
  {
    id: 1,
    title:
      '1º Colóquio Científico Internacional sobre Povos e Comunidades Tradicionais',
    subtitle: 'COLÓQUIO INTERNACIONAL DA REDECT',
    subscriptionPeriod: {
      start: '26/11/2025',
      end: '28/11/2025',
      time: '08:00 - 22:00',
    },
    description:
      'Evento internacional reunindo pesquisadores, lideranças e comunidades tradicionais para debater desafios e perspectivas científicas.',
    href: 'https://redect.org/eventos/coloquio-internacional-2025',
    image: {
      url: '/images/placeholder.png',
      alt: 'Logo do evento com figuras estilizadas em cores marrom, vermelho e verde',
    },
    status: 'inscricoes-abertas',
  },
  {
    id: 2,
    title: 'Simpósio Amazônico de Saberes Tradicionais',
    subtitle: 'SABERES AMAZÔNICOS',
    subscriptionPeriod: {
      start: '10/09/2024',
      end: '12/09/2024',
      time: '09:00 - 18:00',
    },
    description:
      'Simpósio dedicado à valorização e discussão dos saberes tradicionais amazônicos, com mesas-redondas, oficinas e apresentações culturais.',
    href: 'https://redect.org/eventos/simposio-amazonico-2024',
    image: {
      url: '/images/congressos-regionais/rede-ct.png',
      alt: 'Arte gráfica representando a floresta amazônica e povos indígenas',
    },
    status: 'inscricoes-encerradas',
  },
  {
    id: 3,
    title: 'Encontro Nacional de Pesquisadores Indígenas',
    subtitle: 'ENPI 2024',
    subscriptionPeriod: {
      start: '05/08/2024',
      end: '07/08/2024',
      time: '14:00 - 20:00',
    },
    description:
      'Evento nacional para troca de experiências e apresentação de pesquisas desenvolvidas por pesquisadores indígenas de todo o Brasil.',
    href: 'https://redect.org/eventos/enpi-2024',
    image: {
      url: '/images/placeholder.png',
      alt: 'Ilustração de pesquisadores indígenas em roda de conversa',
    },
    status: 'inscricoes-encerradas',
  },
  {
    id: 4,
    title: 'Jornada de Estudos Quilombolas',
    subtitle: 'JORNADA QUILOMBOLA',
    subscriptionPeriod: {
      start: '15/10/2024',
      end: '17/10/2024',
      time: '08:30 - 17:30',
    },
    description:
      'Jornada acadêmica com foco em pesquisas, experiências e desafios das comunidades quilombolas no Brasil contemporâneo.',
    href: 'https://redect.org/eventos/jornada-quilombola-2024',
    image: {
      url: '/images/congressos-regionais/rede-ct.png',
      alt: 'Imagem estilizada de uma comunidade quilombola',
    },
    status: 'inscricoes-abertas',
  },
  {
    id: 5,
    title: 'Seminário de Educação Intercultural',
    subtitle: 'EDUCAÇÃO INTERCULTURAL',
    subscriptionPeriod: {
      start: '20/11/2024',
      end: '22/11/2024',
      time: '10:00 - 19:00',
    },
    description:
      'Seminário voltado para práticas e políticas de educação intercultural, com participação de educadores, estudantes e lideranças comunitárias.',
    href: 'https://redect.org/eventos/seminario-intercultural-2024',
    image: {
      url: '/images/placeholder.png',
      alt: 'Desenho de crianças de diferentes etnias em círculo',
    },
    status: 'inscricoes-abertas',
  },
  // Novos eventos adicionados
  {
    id: 6,
    title: 'Fórum Regional de Inovação Social',
    subtitle: 'INOVAÇÃO SOCIAL AMAZÔNICA',
    subscriptionPeriod: {
      start: '03/12/2024',
      end: '05/12/2024',
      time: '09:00 - 18:00',
    },
    description:
      'Fórum para discussão de práticas inovadoras em políticas públicas e desenvolvimento social na Amazônia, com painéis e workshops.',
    href: 'https://redect.org/eventos/forum-inovacao-social-2024',
    image: {
      url: '/images/placeholder.png',
      alt: 'Gráfico de pessoas colaborando em projetos sociais',
    },
    status: 'inscricoes-abertas',
  },
  {
    id: 7,
    title: 'Congresso Nacional de Juventudes Tradicionais',
    subtitle: 'JUVENTUDES E TRADIÇÃO',
    subscriptionPeriod: {
      start: '18/03/2025',
      end: '20/03/2025',
      time: '08:00 - 20:00',
    },
    description:
      'Congresso reunindo jovens de comunidades tradicionais para debater identidade, cultura e desafios contemporâneos.',
    href: 'https://redect.org/eventos/congresso-juventudes-2025',
    image: {
      url: '/images/congressos-regionais/rede-ct.png',
      alt: 'Jovens de diferentes etnias em roda de conversa',
    },
    status: 'inscricoes-abertas',
  },
  {
    id: 8,
    title: 'Oficina de Cartografia Social',
    subtitle: 'CARTOGRAFIA PARTICIPATIVA',
    subscriptionPeriod: {
      start: '12/08/2024',
      end: '13/08/2024',
      time: '13:00 - 17:00',
    },
    description:
      'Oficina prática sobre mapeamento participativo de territórios tradicionais, com uso de ferramentas digitais e metodologias colaborativas.',
    href: 'https://redect.org/eventos/oficina-cartografia-2024',
    image: {
      url: '/images/placeholder.png',
      alt: 'Mapa estilizado com ícones de comunidades',
    },
    status: 'inscricoes-encerradas',
  },
  {
    id: 9,
    title: 'Encontro de Mulheres das Águas',
    subtitle: 'MULHERES E TERRITÓRIOS HÍDRICOS',
    subscriptionPeriod: {
      start: '22/09/2024',
      end: '24/09/2024',
      time: '09:00 - 18:00',
    },
    description:
      'Encontro para troca de experiências e fortalecimento de redes entre mulheres ribeirinhas, pescadoras e marisqueiras.',
    href: 'https://redect.org/eventos/encontro-mulheres-aguas-2024',
    image: {
      url: '/images/congressos-regionais/rede-ct.png',
      alt: 'Mulheres em barco navegando por rios amazônicos',
    },
    status: 'inscricoes-abertas',
  },
  {
    id: 10,
    title: 'Seminário Internacional de Línguas Indígenas',
    subtitle: 'LÍNGUAS E RESISTÊNCIA',
    subscriptionPeriod: {
      start: '05/05/2025',
      end: '07/05/2025',
      time: '08:00 - 18:00',
    },
    description:
      'Seminário internacional sobre preservação, revitalização e ensino de línguas indígenas, com palestras e oficinas.',
    href: 'https://redect.org/eventos/seminario-linguas-indigenas-2025',
    image: {
      url: '/images/placeholder.png',
      alt: 'Símbolos de diferentes línguas indígenas em fundo colorido',
    },
    status: 'inscricoes-abertas',
  },
]

export async function getEvents(): Promise<IEvent[]> {
  return await new Promise((resolve) => resolve(events))
}
