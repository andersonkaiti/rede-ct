"use server";

import "server-only";
import { IUser } from "types/user";

export interface IInMemorian extends Omit<IUser, "lattesUrl"> {
  date: string;
}

const inMemorianPesquisadores: IInMemorian[] = [
  {
    name: "Prof. Dr. José Ronaldo Fassheber",
    date: "(- nononon +07/10/2023)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/in-memorian-1.png",
      alt: "Prof. Dr. José Ronaldo Fassheber",
    },
  },
  {
    name: "Prof. Dr. Marcelo Alves Terra",
    date: "(- nononon +07/10/2023)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/in-memorian-2.png",
      alt: "Prof. Dr. Marcelo Alves Terra",
    },
  },
  {
    name: "Prof. Dr. Carlos Rodrigues Brandão",
    date: "(-14/04/1940 +11/07/2023)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/in-memorian-3.png",
      alt: "Prof. Dr. Carlos Rodrigues Brandão",
    },
  },
  {
    name: "Prof. Rodrigo Pasquarelli Dalmédico",
    date: "(nono nonono nonnno)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/in-memorian-4.png",
      alt: "Prof. Rodrigo Pasquarelli Dalmédico",
    },
  },
  {
    name: "Prof. Waldir Araújo Souza",
    date: "(nono nonono nonnno)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/placeholder.png",
      alt: "Prof. Waldir Araújo Souza",
    },
  },
];

export async function getInMemorianPesquisadores() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return inMemorianPesquisadores;
}
