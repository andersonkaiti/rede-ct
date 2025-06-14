import { Badge } from "@components/ui/badge";
import { FileText } from "lucide-react";
import { Suspense } from "react";

import { LoadingSkeleton } from "./_components/loading-skeleton";
import { Magazines } from "./_components/magazines";

export default async function PeriodicoERevistasParceiras() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8 text-center">
        <h1 className="title-1">
          Periódico Científico da <span className="text-primary">RedeCT</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          A RedeCT está orientada para a criação de sua Revista Científica, com
          identidade específica entre universidade, ciência e Povos
          Tradicionais.
        </p>
      </header>

      <div className="space-y-8">
        <section className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-primary/10 text-primary rounded-full p-2">
              <FileText className="!size-7" />
            </Badge>
            <h2 className="text-3xl font-bold">Uma breve explicação</h2>
          </div>
          <p className="text-muted-foreground">
            Este é um projeto audacioso e complexo, exigindo planejamento
            técnico, editorial e político. Enquanto o periódico não está pronto,
            fortalecemos nossa presença científica através de{" "}
            <span className="text-primary font-semibold">
              revistas parceiras
            </span>
            .
          </p>
        </section>

        <section className="space-y-8">
          <h3 className="text-center text-3xl font-bold">
            Revistas Científicas Parceiras
          </h3>
          <Suspense fallback={<LoadingSkeleton />}>
            <Magazines />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
