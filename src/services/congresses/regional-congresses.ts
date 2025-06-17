export interface IRegionalCongress {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const regionalCongresses: IRegionalCongress[] = [
  {
    id: 1,
    title: "Congresso Nonono Nonononno",
    description:
      "Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.",
    imageUrl: "/images/congressos-regionais/rede-ct.png",
    link: "#",
  },
  {
    id: 2,
    title: "Congresso Nonono Nononnono",
    description:
      "Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.",
    imageUrl: "/images/congressos-regionais/rede-ct.png",
    link: "#",
  },
  {
    id: 3,
    title: "Congresso Nonono Nononnono",
    description:
      "Nononon nonono onono non nn ono nnno nono noon no non o non ono nono nono nono no nono nononoonnono nononon ononono nonononon nonnnono nonon nono ono nono non onoonnonnnonono.",
    imageUrl: "/images/congressos-regionais/rede-ct.png",
    link: "#",
  },
];

export async function getRegionalCongresses() {
  return regionalCongresses;
}
