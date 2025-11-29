import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AdminWrapper } from '../../../../../_components/hoc/admin'
import { FilterInput } from '../../../../_components/filter-input'
import { CreateGalleryImageButton } from './_components/create-gallery-image-button'

export default function CongressGallery() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Galeria do Congresso Regional</PageTitle>
            <PageDescription>
              Gerencie as imagens da galeria do congresso regional
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />
          </PageActionsContainer>

          <CreateGalleryImageButton />
        </PageHeader>

        <PageMain>Galeria do Congresso Regional</PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
