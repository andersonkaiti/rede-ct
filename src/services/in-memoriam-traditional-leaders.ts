"use server";

import "server-only";

import { IInMemoriam } from "./in-memoriam-researchers";

const inMemoriamTraditionalLeaders: IInMemoriam[] = [
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

export async function getInMemoriamTraditionalLeaders() {
  return inMemoriamTraditionalLeaders;
}
