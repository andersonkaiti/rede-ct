import { getInMemorianTraditionalLeaders } from "@services/in-memorian-traditional-leaders";

import { InMemoriamCard } from "./in-memoriam-card";

export async function PovosTradicionais() {
  const inMemorianTraditionalLeaders = await getInMemorianTraditionalLeaders();

  return (
    <>
      {inMemorianTraditionalLeaders.map((member, index: number) => (
        <InMemoriamCard key={index} member={member} />
      ))}
    </>
  );
}
