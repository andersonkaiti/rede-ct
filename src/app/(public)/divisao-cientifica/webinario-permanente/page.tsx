import { Suspense } from "react";

import { LoadingSkeleton } from "./_components/loading-skeleton";
import { Webinars } from "./_components/webnars";

export default function WebinarioPermanente() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8 text-center">
        <h1 className="title-1">Webinário Permanente da RedeCT</h1>
        <p className="text-muted-foreground text-lg">
          O Webinário Permanente da RedeCT foi criado como espaço midiático de
          diálogo, apresentação e divulgação dos trabalhos (pesquisas, projetos,
          livros) dos Pesquisadores Filiados e outros convidados. O acesso é
          livre e gratuito pelo Canal do Youtube da RedeCT, programe-se,
          participe, prestigie, veja aqui a PROGRAMAÇÃO DOS PRÓXIMOS WEBINARIOS.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <Webinars />
      </Suspense>
    </main>
  );
}
