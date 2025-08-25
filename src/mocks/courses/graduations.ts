export interface ICourse {
  id: number
  title: string
  description: string
  imageUrl: string
  link: string
  date: string
  time: string
  location: string
  vacancies: string
  category: string
}

export const courses: ICourse[] = [
  {
    id: 1,
    title: 'Curso de Pós-graduação em Gestão da Inovação',
    description:
      'Curso completo sobre gestão da inovação em ambientes corporativos e acadêmicos, com foco em desenvolvimento de competências para liderança em inovação.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '15 de Agosto a 30 de Novembro de 2024',
    time: '19:00 às 22:00',
    location: 'Online - Plataforma Zoom',
    vacancies: '30 vagas disponíveis',
    category: 'PÓS-GRADUAÇÃO',
  },
  {
    id: 2,
    title: 'Disciplina: Metodologia da Pesquisa Científica',
    description:
      'Disciplina obrigatória para cursos de pós-graduação, abordando métodos, técnicas e ética na pesquisa científica.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '01 de Setembro a 30 de Novembro de 2024',
    time: 'Quartas-feiras, 18:00 às 21:00',
    location: 'Universidade Federal do Pará - Bloco B',
    vacancies: '40 vagas disponíveis',
    category: 'DISCIPLINA DE PÓS-GRADUAÇÃO',
  },
  {
    id: 3,
    title: 'Curso de Pós-graduação em Sustentabilidade Amazônica',
    description:
      'Curso interdisciplinar voltado para profissionais interessados em práticas sustentáveis e conservação ambiental na Amazônia.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '10 de Outubro de 2024 a 15 de Março de 2025',
    time: 'Sábados, 08:00 às 12:00',
    location: 'Universidade Federal do Amazonas - Sala 201',
    vacancies: '25 vagas disponíveis',
    category: 'PÓS-GRADUAÇÃO',
  },
  {
    id: 4,
    title: 'Disciplina: Inovação e Empreendedorismo',
    description:
      'Disciplina eletiva para pós-graduação, com foco em processos de inovação, empreendedorismo e desenvolvimento de startups.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '05 de Setembro a 28 de Novembro de 2024',
    time: 'Quintas-feiras, 19:00 às 22:00',
    location: 'Online - Google Meet',
    vacancies: '35 vagas disponíveis',
    category: 'DISCIPLINA DE PÓS-GRADUAÇÃO',
  },
  {
    id: 5,
    title: 'Curso de Pós-graduação em Educação Intercultural',
    description:
      'Voltado para educadores e pesquisadores, este curso aborda práticas de educação intercultural e valorização dos saberes tradicionais.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '20 de Setembro de 2024 a 10 de Fevereiro de 2025',
    time: 'Terças e Quintas, 18:30 às 21:30',
    location: 'Universidade Federal do Pará - Bloco C',
    vacancies: '28 vagas disponíveis',
    category: 'PÓS-GRADUAÇÃO',
  },
  {
    id: 6,
    title: 'Disciplina: Bioética e Integridade Científica',
    description:
      'Disciplina fundamental para pós-graduandos, abordando princípios éticos, integridade e responsabilidade na pesquisa científica.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '02 de Outubro a 27 de Novembro de 2024',
    time: 'Quartas-feiras, 17:00 às 20:00',
    location: 'Online - Plataforma Teams',
    vacancies: '32 vagas disponíveis',
    category: 'DISCIPLINA DE PÓS-GRADUAÇÃO',
  },
  {
    id: 7,
    title: 'Curso de Pós-graduação em Políticas Públicas para a Amazônia',
    description:
      'Curso voltado para profissionais interessados em políticas públicas, desenvolvimento regional e sustentabilidade na Amazônia.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '05 de Novembro de 2024 a 20 de Abril de 2025',
    time: 'Sábados, 09:00 às 13:00',
    location: 'Universidade Federal do Amazonas - Auditório 3',
    vacancies: '22 vagas disponíveis',
    category: 'PÓS-GRADUAÇÃO',
  },
  {
    id: 8,
    title: 'Disciplina: Estatística Aplicada à Pesquisa',
    description:
      'Disciplina prática sobre análise estatística de dados científicos, com uso de softwares e estudos de caso.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '10 de Setembro a 01 de Dezembro de 2024',
    time: 'Segundas-feiras, 18:00 às 21:00',
    location: 'Universidade Federal do Pará - Laboratório 2',
    vacancies: '36 vagas disponíveis',
    category: 'DISCIPLINA DE PÓS-GRADUAÇÃO',
  },
  {
    id: 9,
    title: 'Curso de Pós-graduação em Gestão Ambiental',
    description:
      'Formação avançada em gestão ambiental, legislação, licenciamento e práticas de sustentabilidade para a região amazônica.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '18 de Outubro de 2024 a 15 de Março de 2025',
    time: 'Sextas-feiras, 18:30 às 22:00',
    location: 'Online - Plataforma Zoom',
    vacancies: '30 vagas disponíveis',
    category: 'PÓS-GRADUAÇÃO',
  },
  {
    id: 10,
    title: 'Disciplina: Redação Científica e Publicação',
    description:
      'Disciplina voltada para o desenvolvimento de habilidades em redação científica, revisão de artigos e publicação em periódicos.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '12 de Setembro a 28 de Novembro de 2024',
    time: 'Quintas-feiras, 17:00 às 20:00',
    location: 'Online - Google Meet',
    vacancies: '38 vagas disponíveis',
    category: 'DISCIPLINA DE PÓS-GRADUAÇÃO',
  },
]

export async function getCourses(): Promise<ICourse[]> {
  return await new Promise((resolve) => resolve(courses))
}
