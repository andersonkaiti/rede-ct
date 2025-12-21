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
import { CreateInternationalScientificCongressButton } from './_components/create-international-scientific-congress-button'
import { InternationalScientificCongressesDisplayOptions } from './_components/international-scientific-congress-display-options'
import { Table } from './_components/table/table'

export default function InternationalScientificCongresses() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Congressos Científicos Internacionais</PageTitle>
            <PageDescription>
              Gerencie os congressos científicos internacionais
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <InternationalScientificCongressesDisplayOptions />
          </PageActionsContainer>

          <CreateInternationalScientificCongressButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
