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
import { GalleryDisplayOptions } from './_components/gallery-display-options'
import { Table } from './_components/table/table'

export default function CongressGallery() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Galeria do Congresso</PageTitle>
            <PageDescription>
              Gerencie as imagens da galeria do congresso
            </PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <GalleryDisplayOptions />
          </PageActionsContainer>

          <CreateGalleryImageButton />
        </PageHeader>

        <PageMain>
          <Table />
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
