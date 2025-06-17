import { Badge } from "@components/ui/badge";
import { FileText } from "lucide-react";
import { Suspense } from "react";

import { LoadingSkeleton } from "./_components/loading-skeleton";
import { Magazines } from "./_components/magazines";

export default async function PeriodicoERevistasParceiras() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 md:gap-20 lg:p-25">
      <header className="space-y-8 text-center">
        <h1 className="text-center text-3xl font-bold md:text-6xl">
          Periódico Científico da <span className="text-primary">RedeCT</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          A RedeCT está orientada para a criação de sua Revista Científica, com
          identidade específica entre universidade, ciência e Povos
          Tradicionais.
        </p>
      </header>

      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary rounded-md p-2">
            <FileText className="!size-7" />
          </Badge>
          <h2 className="title-3">Uma breve explicação</h2>
        </div>
        <p className="text-muted-foreground bg-primary/10 border-primary/20 rounded-md border p-10 text-justify">
          Este é um projeto audacioso e complexo, exigindo planejamento técnico,
          editorial e político. Enquanto o periódico não está pronto,
          fortalecemos nossa presença científica através de{" "}
          <span className="text-primary font-semibold">revistas parceiras</span>
          .
        </p>
      </section>

      <section className="space-y-7">
        <h3 className="text-center text-3xl font-semibold md:text-4xl">
          Revistas Científicas Parceiras
        </h3>
        <p className="text-muted-foreground text-center">
          Colaboramos com revistas científicas renomadas para fortalecer a
          pesquisa e divulgação científica
        </p>
        <Suspense fallback={<LoadingSkeleton />}>
          <Magazines />
        </Suspense>
      </section>
    </main>
  );
}
