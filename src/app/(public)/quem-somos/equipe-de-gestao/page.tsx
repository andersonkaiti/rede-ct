import { UsersIcon } from '@components/icons/users'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import LoadingSkeleton from './_components/loading-skeleton'
import { ManagementTeams } from './_components/management-teams'

export default function ManagementTeam() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <UsersIcon className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Conheça as equipes da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Nossa equipe é formada por profissionais dedicados que trabalham para
        fortalecer a colaboração entre a academia e os povos tradicionais. Veja
        abaixo quem faz parte da gestão da RedeCT.
      </PageDescription>

      <Suspense fallback={<LoadingSkeleton />}>
        <ManagementTeams />
      </Suspense>
    </PageContainer>
  )
}
