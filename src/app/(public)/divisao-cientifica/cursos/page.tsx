import { BookTextIcon } from '@components/icons/book-text'
import { Badge } from '@components/ui/badge'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicCourseList = dynamic(() =>
  import('./_components/course-list').then((mod) => mod.CourseList),
)

export default function Cursos() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-10 lg:p-25">
      <header className="space-y-8">
        <div className="flex items-center gap-4">
          <Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
            <BookTextIcon />
          </Badge>
          <h1 className="title-2">Cursos</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Conheça os cursos promovidos ou chancelados pela RedeCT. Desenvolva
          novas habilidades e conhecimentos com nossos programas de cursos.
        </p>
      </header>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicCourseList />
      </Suspense>

      <footer className="text-justify text-lg text-muted-foreground">
        <p>
          A RedeCT oferece cursos em diversas áreas do conhecimento, com o
          objetivo de promover o desenvolvimento profissional e acadêmico de
          seus membros. Nossos cursos são ministrados por especialistas
          reconhecidos em suas áreas de atuação, proporcionando uma experiência
          de aprendizado de alta qualidade.
        </p>
      </footer>
    </main>
  )
}
