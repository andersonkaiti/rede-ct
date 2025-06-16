import { getInMemorianResearchers } from "@services/in-memorian-researchers";

import { InMemoriamCard } from "./in-memoriam-card";

export async function Pesquisadores() {
  const inMemorianResearchers = await getInMemorianResearchers();

  return (
    <>
      {inMemorianResearchers.map((member, index: number) => (
        <InMemoriamCard key={index} member={member} />
      ))}
    </>
  );
}
