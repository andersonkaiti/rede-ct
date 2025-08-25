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
    title: 'Curso de Graduação em Engenharia de Computação',
    description:
      'Curso completo sobre fundamentos de engenharia de computação, abrangendo hardware, software e inovação tecnológica.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '01 de Março a 15 de Dezembro de 2024',
    time: '19:00 às 22:00',
    location: 'Universidade Federal do Pará - Bloco A',
    vacancies: '40 vagas disponíveis',
    category: 'GRADUAÇÃO',
  },
  {
    id: 2,
    title: 'Capacitação em Tecnologias Sociais',
    description:
      'Aprenda sobre o desenvolvimento e implementação de tecnologias sociais para comunidades tradicionais e urbanas.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '10 a 20 de Setembro de 2024',
    time: '18:00 às 21:00',
    location: 'Universidade Federal do Pará - Auditório 2',
    vacancies: '50 vagas disponíveis',
    category: 'CAPACITAÇÃO',
  },
  {
    id: 3,
    title: 'Oficina de Elaboração de Projetos Científicos',
    description:
      'Oficina prática para elaboração de projetos científicos, desde a concepção da ideia até a submissão em editais.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '05 a 07 de Outubro de 2024',
    time: '14:00 às 17:00',
    location: 'Online - Google Meet',
    vacancies: '40 vagas disponíveis',
    category: 'OFICINA',
  },
  {
    id: 4,
    title: 'Curso de Extensão em Educação Intercultural',
    description:
      'Curso voltado para professores e educadores interessados em práticas de educação intercultural e valorização dos saberes tradicionais.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '01 a 30 de Novembro de 2024',
    time: 'Sábados, 09:00 às 12:00',
    location: 'Universidade Federal do Amazonas - Sala 101',
    vacancies: '25 vagas disponíveis',
    category: 'EXTENSÃO',
  },
  {
    id: 5,
    title: 'Workshop: Inovação e Sustentabilidade',
    description:
      'Workshop interativo sobre práticas inovadoras para sustentabilidade em organizações públicas e privadas.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '18 de Outubro de 2024',
    time: '08:00 às 17:00',
    location: 'Online - Plataforma Teams',
    vacancies: '60 vagas disponíveis',
    category: 'WORKSHOP',
  },
  {
    id: 6,
    title: 'Curso de Graduação em Ciências Biológicas',
    description:
      'Formação sólida em ciências biológicas, com ênfase em pesquisa, ensino e extensão para a Amazônia.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '15 de Fevereiro a 20 de Dezembro de 2024',
    time: '08:00 às 12:00',
    location: 'Universidade Federal do Amazonas - Bloco C',
    vacancies: '35 vagas disponíveis',
    category: 'GRADUAÇÃO',
  },
  {
    id: 7,
    title: 'Capacitação em Gestão de Projetos',
    description:
      'Capacitação voltada para profissionais que desejam aprimorar habilidades em gestão de projetos sociais e científicos.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '22 a 30 de Julho de 2024',
    time: '18:30 às 21:30',
    location: 'Online - Plataforma Zoom',
    vacancies: '45 vagas disponíveis',
    category: 'CAPACITAÇÃO',
  },
  {
    id: 8,
    title: 'Oficina de Comunicação Científica',
    description:
      'Aprenda técnicas de comunicação científica para divulgação de pesquisas em diferentes mídias.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '12 a 14 de Agosto de 2024',
    time: '09:00 às 12:00',
    location: 'Universidade Federal do Pará - Laboratório 5',
    vacancies: '30 vagas disponíveis',
    category: 'OFICINA',
  },
  {
    id: 9,
    title: 'Curso de Extensão em Sustentabilidade Amazônica',
    description:
      'Curso interdisciplinar sobre práticas sustentáveis e conservação ambiental na região amazônica.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '03 a 28 de Setembro de 2024',
    time: 'Terças e Quintas, 14:00 às 17:00',
    location: 'Online - Google Meet',
    vacancies: '40 vagas disponíveis',
    category: 'EXTENSÃO',
  },
  {
    id: 10,
    title: 'Workshop: Ferramentas Digitais para Educação',
    description:
      'Workshop prático sobre o uso de ferramentas digitais inovadoras no ensino remoto e presencial.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '25 de Outubro de 2024',
    time: '13:00 às 18:00',
    location: 'Universidade Federal do Pará - Auditório 1',
    vacancies: '55 vagas disponíveis',
    category: 'WORKSHOP',
  },
]

export async function getCourses(): Promise<ICourse[]> {
  return await new Promise((resolve) => resolve(courses))
}
