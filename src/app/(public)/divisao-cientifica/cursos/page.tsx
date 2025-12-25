import { BookTextIcon } from '@components/icons/book-text'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { CoursesList } from './_components/courses-list'

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

      <CoursesList />
    </PageContainer>
  )
}
