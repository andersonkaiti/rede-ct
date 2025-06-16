import { Suspense } from "react";

import { Congresses } from "./_components/congresses";
import { LoadingSkeleton } from "./_components/loading-skeleton";

export default async function CongressosRegionais() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Congressos Regionais da RedeCT</h1>
        <p className="text-muted-foreground text-lg">
          Nesta seção são apresentados os congressos credenciados pela Rede como
          sendo Congressos Regionais da RedeCT, ou mesmo operacionalizado em
          parceria institucional da Rede.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <Congresses />
      </Suspense>
    </main>
  );
}
