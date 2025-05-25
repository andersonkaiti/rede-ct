import { NavigationCard } from "@components/navigation-card";
import { Award, Banknote, History, Newspaper } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center gap-2 space-y-3.5 p-4 py-10 sm:gap-12.5">
      <h1 className="title-2">Área Restrita</h1>
      <p className="text-justify">
        Bem-vindo(a) de volta à área restrita do site. Aqui você encontrará
        informações exclusivas e recursos para gerenciar sua conta.
      </p>
      <section>
        <NavigationCard.Root href="/area-restrita/noticias">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-indigo-500/20 p-2">
              <Newspaper className="text-indigo-500" />
            </div>
            <h3 className="text-lg font-semibold">Notícias</h3>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/area-restrita/pendencias">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-red-500/20 p-2">
              <Banknote className="text-red-500" />
            </div>
            <h3 className="text-lg font-semibold">Pendências</h3>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/area-restrita/certificados">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-green-500/20 p-2">
              <Award className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold">Certificados</h3>
          </div>
        </NavigationCard.Root>
        <NavigationCard.Root href="/area-restrita/historico">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-orange-500/20 p-2">
              <History className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold">Histórico</h3>
          </div>
        </NavigationCard.Root>
      </section>
    </div>
  );
}
