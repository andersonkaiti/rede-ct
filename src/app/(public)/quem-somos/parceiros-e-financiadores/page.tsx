import { Badge } from "@components/ui/badge";
import { RedNavigationCard } from "@components/ui/red-navigation-card";
import { getPartnerships } from "@services/partnerships";
import { Handshake, Users } from "lucide-react";
import { IPartnership } from "types/partnership";

import { Partnership } from "./_components/partnetship";

export default async function ParceirosEFinanciadores() {
  const partnerships = await getPartnerships();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <div className="flex items-center gap-4">
          <Badge className="bg-primary/10 text-primary rounded-full p-1.5">
            <Users className="!size-7" />
          </Badge>
          <h1 className="title-2">PARCERIAS INSTITUCIONAIS E FINANCIAMENTOS</h1>
        </div>
        <p className="text-muted-foreground text-justify">
          Nesta seção, a RedeCT apresenta cada um de seus Parceiros
          Institucionais, descreve quando e como a parceria foi estabelecida e
          os resultados alcançados.
        </p>
      </section>
      <section className="space-y-14">
        {partnerships.map((partnership: IPartnership, index: number) => (
          <Partnership key={index} partnership={partnership} />
        ))}
      </section>
      <RedNavigationCard href="/contato">
        <div className="flex flex-col gap-4">
          <h2 className="title-3 flex items-center gap-2">
            <Handshake />
            Interessado em ser um parceiro?
          </h2>
          <p>
            Entre em contato conosco para saber mais sobre como podemos
            colaborar para o sucesso da RedeCT.
          </p>
        </div>
      </RedNavigationCard>
    </main>
  );
}
