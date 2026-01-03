import { checkIsAdmin } from '@auth/auth'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'
import { CertificationsNavigationCard } from './_components/navigation-cards/certifications'
import { HistoryNavigationCard } from './_components/navigation-cards/history'
import { NewsNavigationCard } from './_components/navigation-cards/news'
import { PendenciesNavigationCard } from './_components/navigation-cards/pendencies'
import { TeamsNavigationCard } from './_components/navigation-cards/teams'

export default async function AreaRestrita() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Área Restrita</PageTitle>
          <PageDescription>
            Bem-vindo(a) de volta à área restrita do site. Aqui você encontrará
            informações exclusivas e recursos para gerenciar sua conta.
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageMain>
        <section className="flex flex-col gap-2">
          <NewsNavigationCard />

          <PendenciesNavigationCard />

          <CertificationsNavigationCard />

          <HistoryNavigationCard />

          {(await checkIsAdmin()) && <TeamsNavigationCard />}
        </section>
      </PageMain>
    </PageContainer>
  )
}
