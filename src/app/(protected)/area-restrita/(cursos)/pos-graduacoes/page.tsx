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
import { CreateProgramButton } from './_components/create-program-button'
import { ProgramDisplayOptions } from './_components/program-display-options'
import { Table } from './_components/table/table'

function PostGraduatePrograms() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Programas de Pós-Graduação</PageTitle>
          <PageDescription>
            Gerencie os programas de pós-graduação
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <ProgramDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateProgramButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(PostGraduatePrograms)
