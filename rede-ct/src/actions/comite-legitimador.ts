"use server";

import "server-only";
import { IUser } from "types/user";

export type ComiteLegitimador = Omit<IUser, "lattesUrl">;

const comiteLegitimador: ComiteLegitimador[] = [
  {
    name: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    role: "Vice-coordenadora de Extensão Universitária e Cultura",
    image: {
      src: "/images/comite-legitimador-1.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Luis Fernando Marques",
    role: "Secretário Geral do Comitê Legitimador da RedeCT",
    image: {
      src: "/images/comite-legitimador-2.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Profa. Celenita Gualberto Pereira Bernieri",
    role: "Representante de Comunidade Quilombola",
    image: {
      src: "/images/comite-legitimador-3.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Valdivino Marques Sobrinho",
    role: "Representante de Comunidade Tradicional Geraizeira",
    image: {
      src: "/images/comite-legitimador-4.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Prof. Dr. Adriano Batista Castorino",
    role: "Pesquisador da área de Antropologia",
    image: {
      src: "/images/comite-legitimador-5.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Me. Isaltina Santos da Costa Oliveira (Tina)",
    role: "Pesquisadora da área de Museologia",
    image: {
      src: "/images/comite-legitimador-6.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Nonono nonono nonononnoo",
    role: "Representante dos Povos Indígenas",
    image: {
      src: "/images/placeholder.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Nonon nonono nonno non nonono",
    role: "Representante dos Povos Nonono nonononno nnnon",
    image: {
      src: "/images/placeholder.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
  {
    name: "Nonononono nono nononono",
    role: "Representante dos Povos Nononononoono",
    image: {
      src: "/images/placeholder.png",
      alt: "Profa. Dra. Ana D'Arc Martins de Azevedo",
    },
  },
];

export async function getComiteLegitimador() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return comiteLegitimador;
}
