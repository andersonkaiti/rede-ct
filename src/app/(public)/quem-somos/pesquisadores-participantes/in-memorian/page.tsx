import { BackArrow } from "@components/back-arrow";
import { SkeletonCards } from "@components/user-card/skeleton-cards";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicPesquisadores = dynamic(() =>
  import("../pesquisadores/pesquisadores").then((m) => m.Pesquisadores),
);

const DynamicPovosTradicionais = dynamic(() =>
  import("./povos-tradicionais").then((m) => m.PovosTradicionais),
);

export default function InMemorian() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <h1 className="title-1 text-center">Galeria in memoriam 💐</h1>
      <section className="space-y-8">
        <h2 className="title-2">Pesquisadores da RedeCT 🎓</h2>
        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos saudosos Pesquisadores
          Filiados falecidos que deixaram sua contribuição e legado junto à
          RedeCT.
        </p>
      </section>
      <Suspense fallback={<SkeletonCards />}>
        <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <DynamicPesquisadores />
        </section>
      </Suspense>
      <section className="space-y-8">
        <h2 className="title-2">Povos Tradicionais 🌎</h2>

        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos líderes de Povos
          Tradicionais falecidos e que deixaram sua contribuição e legado na
          luta de resistência e de emancipação efetiva de seus povos e
          comunidades.
        </p>
      </section>
      <Suspense fallback={<SkeletonCards />}>
        <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <DynamicPovosTradicionais />
        </section>
      </Suspense>
    </main>
  );
}
