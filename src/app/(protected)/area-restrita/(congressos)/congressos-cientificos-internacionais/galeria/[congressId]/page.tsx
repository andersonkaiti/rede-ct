import { OrderByButton } from '@/app/(protected)/area-restrita/_components/order-by-button'
import { AdminHOC } from '../../../../../_components/hoc/admin'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '../../../../../_components/page-container'
import { FilterInput } from '../../../../_components/filter-input'
import { CreateGalleryImageButton } from './_components/create-gallery-image-button'
import { GalleryDisplayOptions } from './_components/gallery-display-options'
import { Table } from './_components/table/table'

function CongressGallery() {
  return (
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

          <OrderByButton />
        </PageActionsContainer>

        <CreateGalleryImageButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(CongressGallery)
