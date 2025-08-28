export interface IRegionalCongress {
  id: number
  title: string
  description: string
  imageUrl: string
  link: string
  date: string
}

const regionalCongresses: IRegionalCongress[] = [
  {
    id: 1,
    title: 'Congresso Nonono Nonononno',
    description:
      'Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '15 de Março de 2024',
  },
  {
    id: 2,
    title: 'Congresso Nonono Nononnono',
    description:
      'Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '22 de Abril de 2024',
  },
  {
    id: 3,
    title: 'Congresso Nonono Nononnono',
    description:
      'Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.',
    imageUrl: '/images/congressos-regionais/rede-ct.png',
    link: '#',
    date: '10 de Maio de 2024',
  },
]

export async function getRegionalCongresses(): Promise<IRegionalCongress[]> {
  return await new Promise((resolve) => resolve(regionalCongresses))
}
