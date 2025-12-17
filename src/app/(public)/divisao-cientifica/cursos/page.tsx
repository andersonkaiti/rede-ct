import { BookTextIcon } from '@components/icons/book-text'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicCourseList = dynamic(() =>
  import('./_components/course-list').then((mod) => mod.CourseList),
)

export default function Cursos() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <BookTextIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Cursos</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Conheça os cursos promovidos ou chancelados pela RedeCT. Desenvolva
        novas habilidades e conhecimentos com nossos programas de cursos.
      </PageDescription>

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
    </PageContainer>
  )
}
