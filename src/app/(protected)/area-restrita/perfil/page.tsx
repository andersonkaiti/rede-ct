import { getAuthenticatedUser } from '@http/auth/get-user'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { UserProfile } from './_components/user-profile'

export default async function UserProfilePage() {
  const user = await getAuthenticatedUser()

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Perfil do Usuário</PageTitle>
          <PageDescription>
            Veja e gerencie suas informações de perfil
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageMain>
        <UserProfile user={user} />
      </PageMain>
    </PageContainer>
  )
}
