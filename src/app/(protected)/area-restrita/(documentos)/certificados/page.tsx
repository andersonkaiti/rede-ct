import { checkIsAdmin } from '@auth/auth'
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
import { CertificationList } from './_components/certification-list'
import { RegisteredCertificationsButton } from './_components/registered-certifications-button'

export default async function Certificados() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Seus certificados</PageTitle>
          <PageDescription>Visualize os seus certificados</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <OrderByButton />
        </PageActionsContainer>

        {(await checkIsAdmin()) && <RegisteredCertificationsButton />}
      </PageHeader>

      <PageMain>
        <CertificationList />
      </PageMain>
    </PageContainer>
  )
}
