import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicCourses = dynamic(() =>
  import('./_components/courses').then((mod) => mod.Courses)
)

export default function CursosECapacitacoes() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <h1 className="title-2">Cursos e Capacitações</h1>
        <p className="text-lg text-muted-foreground">
          Conheça os cursos e capacitações promovidos ou chancelados pela
          RedeCT. Desenvolva novas habilidades e conhecimentos com nossos
          programas de capacitação.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicCourses />
      </Suspense>

      <footer className="text-justify text-lg text-muted-foreground">
        <p>
          A RedeCT oferece cursos de capacitação em diversas áreas do
          conhecimento, com o objetivo de promover o desenvolvimento
          profissional e acadêmico de seus membros. Nossos cursos são
          ministrados por especialistas reconhecidos em suas áreas de atuação,
          proporcionando uma experiência de aprendizado de alta qualidade.
        </p>
      </footer>
    </main>
  )
}
