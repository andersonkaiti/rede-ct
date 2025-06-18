import dynamic from "next/dynamic";
import { Suspense } from "react";

import { LoadingSkeleton } from "./_components/loading-skeleton";

const DynamicCourses = dynamic(() =>
  import("./_components/courses").then((mod) => mod.Courses),
);

export default function DisciplinasECursosDePosGraduacao() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">
          Programas de Pós-graduação e Disciplinas com Inscrições Abertas
        </h1>
        <p className="text-muted-foreground text-lg">
          Conheça os programas de pós-graduação e disciplinas isoladas
          oferecidas ou chanceladas pela RedeCT. Amplie sua formação acadêmica e
          profissional com nossos cursos de excelência.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicCourses />
      </Suspense>

      <div className="text-muted-foreground text-justify text-lg">
        <p className="mb-4">
          A RedeCT oferece programas de pós-graduação e disciplinas isoladas em
          diversas áreas do conhecimento, com o objetivo de promover o
          desenvolvimento acadêmico e profissional de seus membros. Nossos
          cursos são ministrados por professores doutores e especialistas
          reconhecidos em suas áreas de atuação, proporcionando uma experiência
          de aprendizado de excelência.
        </p>
      </div>
    </main>
  );
}
