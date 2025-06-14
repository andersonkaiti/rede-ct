import { getRegionalCongresses } from "@services/congresses/regional-congresses";

import { CongressCard } from "./congress-card";

export async function Congresses() {
  const congressos = await getRegionalCongresses();

  return (
    <div className="space-y-8">
      {congressos.map((congresso) => (
        <CongressCard
          key={congresso.id}
          title={congresso.title}
          description={congresso.description}
          imageUrl={congresso.imageUrl}
          link={congresso.link}
        />
      ))}
    </div>
  );
}
