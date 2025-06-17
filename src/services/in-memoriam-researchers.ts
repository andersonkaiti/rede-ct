"use server";

import "server-only";

export interface IInMemoriam {
  name: string;
  birthday: string;
  death: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
}

const inMemoriamResearchers: IInMemoriam[] = [
  {
    name: "Prof. Dr. José Ronaldo Fassheber",
    birthday: "07/10/2023",
    death: "07/10/2023",
    role: "Dedicou sua vida ao ensino e à pesquisa, deixando um legado valioso para a comunidade acadêmica.",
    image: {
      src: "/images/in-memorian/in-memorian-1.png",
      alt: "Prof. Dr. José Ronaldo Fassheber",
    },
  },
  {
    name: "Prof. Dr. Marcelo Alves Terra",
    birthday: "07/10/2023",
    death: "07/10/2023",
    role: "Reconhecido por sua excelência acadêmica e contribuição incansável à formação de novos profissionais.",
    image: {
      src: "/images/in-memorian/in-memorian-2.png",
      alt: "Prof. Dr. Marcelo Alves Terra",
    },
  },
  {
    name: "Prof. Dr. Carlos Rodrigues Brandão",
    birthday: "14/04/1940",
    death: "11/07/2023",
    role: "Antropólogo e educador, foi referência em educação popular e defensor incansável da transformação social por meio do conhecimento.",
    image: {
      src: "/images/in-memorian/in-memorian-3.png",
      alt: "Prof. Dr. Carlos Rodrigues Brandão",
    },
  },
  {
    name: "Prof. Rodrigo Pasquarelli Dalmédico",
    birthday: "Data não informada",
    death: "Data não informada",
    role: "Professor dedicado, deixou uma marca indelével em seus alunos e colegas através de seu compromisso com a educação.",
    image: {
      src: "/images/in-memorian/in-memorian-4.png",
      alt: "Prof. Rodrigo Pasquarelli Dalmédico",
    },
  },
  {
    name: "Prof. Waldir Araújo Souza",
    birthday: "Data não informada",
    death: "Data não informada",
    role: "Contribuiu significativamente para a construção do saber e será lembrado por sua ética e generosidade intelectual.",
    image: {
      src: "/images/placeholder.png",
      alt: "Prof. Waldir Araújo Souza",
    },
  },
];

export async function getInMemoriamResearchers() {
  return inMemoriamResearchers;
}
