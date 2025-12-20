import { BookTextIcon } from '@components/icons/book-text'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { PostGraduateProgramList } from './_components/post-graduate-program-list'

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

      <PostGraduateProgramList />
    </PageContainer>
  )
}
