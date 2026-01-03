import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { AdminHOC } from '../../../../_components/hoc/admin'
import { FilterInput } from '../../../_components/filter-input'
import { FilterSelectUser } from '../../../_components/filter-select-user'
import { OrderByButton } from '../../../_components/order-by-button'
import { CreateCertificationButton } from './_components/create-certification/create-certification-button'
import { RegisteredCertificationList } from './_components/registered-certification-list'

function RegisteredCertifications() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Certificados cadastrados</PageTitle>
          <PageDescription>
            Visualize todos os certificados cadastrados
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <OrderByButton />
        </PageActionsContainer>

        <div className="flex w-full flex-col gap-2 md:flex-row lg:w-fit">
          <FilterSelectUser />

          <CreateCertificationButton />
        </div>
      </PageHeader>

      <PageMain>
        <RegisteredCertificationList />
      </PageMain>
    </PageContainer>
  )
}

export default AdminHOC(RegisteredCertifications)
