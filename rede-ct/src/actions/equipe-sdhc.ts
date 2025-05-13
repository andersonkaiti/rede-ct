import { IMembroEquipe } from "@/types/membro";

const equipeSdhc: Omit<IMembroEquipe, "lattesUrl">[] = [
  {
    name: "Joicileia Juliate Fonseca",
    role: "Presidenta",
    image: {
      src: "/images/equipe-sdhc/image-1.png",
      alt: "Joicileia Juliate Fonseca",
    },
  },
  {
    name: "Alexandre de Castro Campos",
    role: "Vice-presidente",
    image: {
      src: "/images/equipe-sdhc/image-2.png",
      alt: "Alexandre de Castro Campos",
    },
  },
  {
    name: "Laurenita Gualberto Pereira Alves",
    role: "Tesoureira",
    image: {
      src: "/images/equipe-sdhc/image-3.png",
      alt: "Laurenita Gualberto Pereira Alves",
    },
  },
  {
    name: "Sérgio Leal Mota",
    role: "Segundo Tesoureiro",
    image: {
      src: "/images/equipe-sdhc/image-4.png",
      alt: "Sérgio Leal Mota",
    },
  },
  {
    name: "Fernando da Cruz Souza",
    role: "Secretário",
    image: {
      src: "/images/equipe-sdhc/image-5.png",
      alt: "Fernando da Cruz Souza",
    },
  },
  {
    name: "Anderson Rodolfo de Lima",
    role: "Segundo Secretário",
    image: {
      src: "/images/equipe-sdhc/image-6.png",
      alt: "Anderson Rodolfo de Lima",
    },
  },
  {
    name: "Valquíria Cristina Martins",
    role: "Conselheiro Fiscal",
    image: {
      src: "/images/equipe-sdhc/image-7.png",
      alt: "Valquíria Cristina Martins",
    },
  },
  {
    name: "Fábio Brega Gamba",
    role: "Conselheiro Fiscal",
    image: {
      src: "/images/equipe-sdhc/image-8.png",
      alt: "Fábio Brega Gamba",
    },
  },
  {
    name: "Valdemir Garcia Neto Melo",
    role: "Conselheiro Fiscal",
    image: {
      src: "/images/equipe-sdhc/image-9.png",
      alt: "Valdemir Garcia Neto Melo",
    },
  },
];

export async function getEquipeSdhc() {
  return equipeSdhc;
}
