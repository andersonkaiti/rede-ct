import { BackArrow } from "@components/back-arrow";
import { Badge } from "@components/ui/badge";
import { UserCardWrapper } from "@components/ui/user-card";
import { Globe, GraduationCap, Heart } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { LoadingSkeleton } from "./_components/loading-skeleton";

const DynamicPesquisadores = dynamic(() =>
  import("./_components/pesquisadores").then((m) => m.Pesquisadores),
);

const DynamicPovosTradicionais = dynamic(() =>
  import("./_components/povos-tradicionais").then((m) => m.PovosTradicionais),
);

export default function InMemorian() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <h1 className="title-2 mx-auto flex items-center gap-2 text-center">
        <Badge className="bg-primary/20 text-primary rounded-full py-2">
          <Heart className="fill-primary !size-7" />
        </Badge>
        Galeria in memoriam
      </h1>
      <section className="space-y-8">
        <h2 className="title-2 flex items-center gap-4">
          <Badge className="bg-primary/20 text-primary rounded-full p-1">
            <GraduationCap className="!size-6" />
          </Badge>
          Pesquisadores da RedeCT
        </h2>
        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos saudosos Pesquisadores
          Filiados falecidos que deixaram sua contribuição e legado junto à
          RedeCT.
        </p>
      </section>
      <Suspense fallback={<LoadingSkeleton />}>
        <UserCardWrapper>
          <DynamicPesquisadores />
        </UserCardWrapper>
      </Suspense>
      <section className="space-y-8">
        <h2 className="title-2 flex items-center gap-4">
          <Badge className="bg-primary/20 text-primary rounded-full p-1">
            <Globe className="!size-6" />
          </Badge>
          Povos Tradicionais
        </h2>

        <p className="text-justify">
          Nesta seção, mantemos nossa homenagem aos líderes de Povos
          Tradicionais falecidos e que deixaram sua contribuição e legado na
          luta de resistência e de emancipação efetiva de seus povos e
          comunidades.
        </p>
      </section>
      <Suspense fallback={<LoadingSkeleton />}>
        <UserCardWrapper>
          <DynamicPovosTradicionais />
        </UserCardWrapper>
      </Suspense>
    </main>
  );
}
