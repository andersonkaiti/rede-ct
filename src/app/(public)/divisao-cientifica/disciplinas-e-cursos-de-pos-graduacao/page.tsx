import { BookTextIcon } from '@components/icons/book-text'
import { Badge } from '@components/ui/badge'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicCourses = dynamic(() =>
  import('./_components/courses').then((mod) => mod.Courses)
)

export default function DisciplinasECursosDePosGraduacao() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <BookTextIcon />
          </Badge>
          <h1 className="title-2">Disciplinas e Cursos de Pós-graduação</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Conheça os programas de pós-graduação e disciplinas isoladas
          oferecidas ou chanceladas pela RedeCT. Amplie sua formação acadêmica e
          profissional com nossos cursos de excelência.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicCourses />
      </Suspense>

      <div className="text-justify text-lg text-muted-foreground">
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
  )
}
