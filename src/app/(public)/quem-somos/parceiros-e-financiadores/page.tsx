import { getParcerias } from "@actions/parcerias";
import { NavigationCard } from "@components/navigation-card";
import { Parceria } from "@components/parceria";
import { Handshake } from "lucide-react";
import { IParceria } from "types/parceria";

export default async function ParceirosEFinanciadores() {
  const parcerias = await getParcerias();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-14">
        <h1 className="title-1 text-center">
          PARCERIAS INSTITUCIONAIS E FINANCIAMENTOS
        </h1>
        <p className="text-justify text-gray-500">
          Nesta seção, a RedeCT apresenta cada um de seus Parceiros
          Institucionais, descreve quando e como a parceria foi estabelecida e
          os resultados alcançados.
        </p>
      </section>
      <section className="space-y-14">
        {parcerias.map((parceira: IParceria, index: number) => (
          <Parceria key={index} parceria={parceira} />
        ))}
      </section>
      <NavigationCard.BlueRoot href="/contato">
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
      </NavigationCard.BlueRoot>
    </main>
  );
}
