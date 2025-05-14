"use server";

import "server-only";
import { IInMemorian } from "./in-memorian-pesquisadores";

const inMemorianLideresPovosTradicionais: IInMemorian[] = [
  {
    name: "Nonon ononon noononononn no",
    date: "(- nononon +nonono)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/placeholder.png",
      alt: "Nonon ononon noononononn no",
    },
  },
  {
    name: "Nonon ononoon noonn",
    date: "(- nononon +nononon)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/placeholder.png",
      alt: "Nonon ononoon noonn",
    },
  },
];

export async function getInMemorianLideresPovosTradicionais() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return inMemorianLideresPovosTradicionais;
}
