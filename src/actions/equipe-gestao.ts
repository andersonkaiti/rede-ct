"use server";

import "server-only";
import { IUser } from "types/user";

export interface ISecaoEquipe {
  title: string;
  members: IUser[];
}

const sections: ISecaoEquipe[] = [
  {
    title: "Coordenadoria Geral da RedeCT",
    members: [
      {
        name: "Profª. Me. Laurenita Gualberto Pereira Alves (LAURINHA GUALBERTO)",
        role: "Coordenadora Geral da RedeCT",
        image: {
          src: "/images/equipe-de-gestao/coordenadoria-geral-redect/coordenadoria-geral-redect-1.png",
          alt: "Profª. Me. Laurenita Gualberto Pereira Alves (LAURINHA GUALBERTO)",
        },
        lattesUrl:
          "https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8183620Z2",
      },
      {
        name: "Prof. Dr. Edson Machado de Brito (EDSON KAYAPÓ)",
        role: "Vice-coordenador Geral da RedeCT",
        image: {
          src: "/images/equipe-de-gestao/coordenadoria-geral-redect/coordenadoria-geral-redect-2.png",
          alt: "Prof. Dr. Edson Machado de Brito (EDSON KAYAPÓ)",
        },
        lattesUrl: "http://lattes.cnpq.br/0433710450942228",
      },
      {
        name: "Prof. Victor Hugo Silva Souza",
        role: "Secretário Geral da RedeCT",
        image: {
          src: "/images/equipe-de-gestao/coordenadoria-geral-redect/coordenadoria-geral-redect-3.png",
          alt: "Prof. Victor Hugo Silva Souza",
        },
        lattesUrl:
          "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K2796479E7",
      },
    ],
  },
];

export async function getEquipeGestao() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return sections;
}
