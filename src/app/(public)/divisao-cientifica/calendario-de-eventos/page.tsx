import { Suspense } from "react";

import { Events } from "./_components/events";
import { LoadingSkeleton } from "./_components/loading-skeleton";

export default function CalendarioDeEventos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8 text-center">
        <h1 className="title-1">Calendário de eventos</h1>
        <p className="text-muted-foreground text-justify text-lg md:text-center">
          Nesta seção são divulgados os eventos científicos relacionados direta
          ou indiretamente à pauta central da RedeCT (também os eventos que não
          são conduzidos pelos Pesquisadores Filiados, mas de interesse destes).
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <Events />
      </Suspense>
    </main>
  );
}
