import { NavigationCard } from "@components/navigation-card";
import { Earth, Network, Search, Users } from "lucide-react";

export default function Equipes() {
  return (
    <div className="flex flex-col justify-center gap-2 space-y-3.5 p-4 py-10 sm:gap-12.5">
      <h1 className="title-2">Equipes</h1>
      <section className="flex flex-col gap-2">
        <NavigationCard.Root href="/area-restrita/equipe-de-gestao">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-red-500/20 p-2">
              <Users className="text-red-500" />
            </div>
            <h3 className="text-lg font-semibold">Equipe de Gestão</h3>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/area-restrita/comite-legitimador">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-green-500/20 p-2">
              <Search className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold">Comitê Legitimador</h3>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/area-restrita/equipe-sdhc">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-orange-500/20 p-2">
              <Earth className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold">Equipe SDHC</h3>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/area-restrita/grupo-de-pesquisa">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-purple-500/20 p-2">
              <Network className="text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold">Grupo de Pesquisa</h3>
          </div>
        </NavigationCard.Root>
      </section>
    </div>
  );
}
