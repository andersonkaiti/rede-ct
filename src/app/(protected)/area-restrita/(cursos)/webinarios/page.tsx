import { Suspense } from 'react'
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from '@/app/(protected)/_components/page-container'

import { AdminWrapper } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { OrderByButton } from '../../_components/order-by-button'
import { CreateWebinarButton } from './_components/create-webinar-button'
import { LoadingSkeleton } from './_components/table/loading-skeleton'
import { Table } from './_components/table/table'
import { WebinarDisplayOptions } from './_components/webinar-display-options'

export default function Webinarios() {
  return (
    <AdminWrapper>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Webinários</PageTitle>
            <PageDescription>Gerencie os seus webinários</PageDescription>
          </PageHeaderContent>
        </PageHeader>

        <PageHeader>
          <PageActionsContainer>
            <FilterInput />

            <WebinarDisplayOptions />

            <OrderByButton />
          </PageActionsContainer>

          <CreateWebinarButton />
        </PageHeader>

        <PageMain>
          <Suspense fallback={<LoadingSkeleton />}>
            <Table />
          </Suspense>
        </PageMain>
      </PageContainer>
    </AdminWrapper>
  )
}
