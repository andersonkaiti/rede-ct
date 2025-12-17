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

const DynamicPostGraduateProgramList = dynamic(() =>
  import('./_components/post-graduate-program-list').then(
    (mod) => mod.PostGraduateProgramList,
  ),
)

export default function PosGraduacao() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <BookTextIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Pós-Graduação</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Conheça os programas de pós-graduação oferecidos pela RedeCT. Amplie sua
        formação acadêmica e profissional com nossos cursos de excelência.
      </PageDescription>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicPostGraduateProgramList />
      </Suspense>

      <footer className="text-justify text-lg text-muted-foreground">
        <p>
          A RedeCT oferece programas de pós-graduação em diversas áreas do
          conhecimento, com o objetivo de promover o desenvolvimento acadêmico e
          profissional de seus membros. Nossos cursos são ministrados por
          professores doutores e especialistas reconhecidos em suas áreas de
          atuação, proporcionando uma experiência de aprendizado de excelência.
        </p>
      </footer>
    </PageContainer>
  )
}
