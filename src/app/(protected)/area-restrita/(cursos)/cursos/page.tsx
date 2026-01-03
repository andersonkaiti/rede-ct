import { AdminHOC } from '../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../_components/page-container'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { CourseDisplayOptions } from './_components/course-display-options'
import { CreateCourseButton } from './_components/create-course-button'
import { Table } from './_components/table/table'

function Cursos() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Cursos</PageTitle>
          <PageDescription>Gerencie os cursos</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <CourseDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateCourseButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Cursos)
