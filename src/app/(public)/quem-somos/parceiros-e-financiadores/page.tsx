import { UsersIcon } from '@components/icons/users'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

const DynamicPartnerList = dynamic(() =>
  import('./_components/partner-list').then((m) => m.PartnerList),
)

export default function ParceirosEFinanciadores() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <UsersIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>
          Parcerias institucionais e financiamentos
        </PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Nesta seção, a RedeCT apresenta cada um de seus Parceiros
        Institucionais, descreve quando e como a parceria foi estabelecida e os
        resultados alcançados.
      </PageDescription>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicPartnerList />
      </Suspense>
    </PageContainer>
  )
}
