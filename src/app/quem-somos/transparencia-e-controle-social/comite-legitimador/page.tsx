import { BackArrow } from "@components/back-arrow";
import { SkeletonCards } from "@components/skeleton/skeleton-cards";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicComiteLegitimador = dynamic(() =>
  import("./comite-legitimador").then((m) => m.ComiteLegitimador),
);

export default async function ComiteLegitimador() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <h2 className="title-1 text-center">
        Composição do Comitê Legitimador da RedeCT
      </h2>
      <Suspense fallback={<SkeletonCards />}>
        <DynamicComiteLegitimador />
      </Suspense>
      <p className="text-justify">
        Sob responsabilidade da Vice-coordenadoria de Extensão Universitária e
        Cultura, o Comitê Legitimador é composto pelo Vice-coordenador de
        Extensão e Cultura (que tem a responsabilidade de organizar as pautas e
        reuniões, tendo direito à palavra e ao voto de minerva) e mais 7 membros
        representantes das áreas de Antropologia e Museologia e de cinco povos
        tradicionais diferentes, todos com direito à palavra e ao voto (sob
        presidência do vice-coordenador que tem voto de minerva em caso de
        empate). O Secretário Geral tem direito à palavra, mas não tem direito
        ao voto.
      </p>
    </main>
  );
}
