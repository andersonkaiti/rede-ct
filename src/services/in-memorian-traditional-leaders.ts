"use server";

import "server-only";

import { IInMemorian } from "./in-memorian-researchers";

const inMemorianTraditionalLeaders: IInMemorian[] = [
  {
    name: "Nonon ononon noononononn no",
    birthday: "(- nononon +nonono)",
    death: "(- nononon +nonono)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/placeholder.png",
      alt: "Nonon ononon noononononn no",
    },
  },
  {
    name: "Nonon ononoon noonn",
    birthday: "(- nononon +nononon)",
    death: "(- nononon +nonono)",
    role: "Nonon nononn nnon nnononononono noononono nonononono nonoonon onnononon nnonoonon.",
    image: {
      src: "/images/placeholder.png",
      alt: "Nonon ononoon noonn",
    },
  },
];

export async function getInMemorianTraditionalLeaders() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return inMemorianTraditionalLeaders;
}
