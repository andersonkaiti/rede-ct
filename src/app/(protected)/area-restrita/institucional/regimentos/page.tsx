import { AdminWrapper } from '../../../_components/hoc/admin'
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
import { CreateRegimentButton } from './_components/create-regiment-button'
import { RegimentsDisplayOptions } from './_components/regiments-display-options'
import { Table } from './_components/table/table'

export default function Regiments() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Regimentos</PageTitle>
            <PageDescription>Gerencie os regimentos</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <RegimentsDisplayOptions />
          </PageActionsContainer>

          <CreateRegimentButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
