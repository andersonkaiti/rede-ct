import { getMagazines } from "@services/magazines/magazines";

import { MagazineCard } from "./magazine-card";

export async function Magazines() {
  const magazines = await getMagazines();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {magazines.map((magazine) => (
        <MagazineCard key={magazine.id} magazine={magazine} />
      ))}
    </div>
  );
}
