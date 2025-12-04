import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../../../_components/hoc/admin'
import { FilterInput } from '../../../_components/filter-input'
import { CreateBookVolumeButton } from './_components/create-book-volume-button'

export default function VolumesDeLivros() {
  return (
    <AdminWrapper>
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
          </PageActionsContainer>

          <CreateBookVolumeButton />
        </PageHeader>

        <PageMain>Volumes de Livros</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
