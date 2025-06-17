import { getInMemoriamResearchers } from "@services/in-memoriam-researchers";

import { InMemoriamCard } from "./in-memoriam-card";

export async function Pesquisadores() {
  const inMemoriamResearchers = await getInMemoriamResearchers();

  return (
    <>
      {inMemoriamResearchers.map((member, index: number) => (
        <InMemoriamCard key={index} member={member} />
      ))}
    </>
  );
}
