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
import { CreateLawButton } from './_components/create-law/create-law-button'
import { LawDisplayOptions } from './_components/law-display-options'
import { Table } from './_components/table/table'

function Legislations() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Legislações</PageTitle>
          <PageDescription>Gerencie as legislações</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <LawDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateLawButton>Adicionar lei</CreateLawButton>
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(Legislations)
