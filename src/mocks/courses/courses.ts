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
]

export async function getCourses(): Promise<ICourse[]> {
  return await new Promise((resolve) => resolve(courses))
}
