import { isAdmin } from '@auth/auth'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@components/ui/page-container'
import { AuthWrapper } from '../../../../_components/hoc/auth'
import { FilterInput } from '../../../_components/filter-input'
import { CreateCertificationButton } from './_components/create-certification/create-certification-button'
import { RegisteredCertificationList } from './_components/registered-certification-list'

export default async function RegisteredCertifications() {
  return (
    <AuthWrapper>
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
          </PageActionsContainer>

          {(await isAdmin()) && <CreateCertificationButton />}
        </PageHeader>

        <PageMain>
          <RegisteredCertificationList />
        </PageMain>
      </PageContainer>
    </AuthWrapper>
  )
}
