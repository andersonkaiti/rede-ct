import { AdminHOC } from '../../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../../_components/page-container'
import { FilterInput } from '../../../_components/filter-input'
import { OrderByButton } from '../../../_components/order-by-button'
import { BookVolumeDisplayOptions } from './_components/book-volume-display-options'
import { CreateBookVolumeButton } from './_components/create-book-volume-button'
import { Table } from './_components/table/table'

function BookVolumes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Volumes de Livros</PageTitle>
          <PageDescription>Gerencie os volumes de livros</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <BookVolumeDisplayOptions />

          <OrderByButton />
        </PageActionsContainer>

        <CreateBookVolumeButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(BookVolumes)
