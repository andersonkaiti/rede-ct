import { BackArrow } from '@components/ui/back-arrow'
import { GraduationCap } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../../_components/page-container'
import { CongressList } from './_components/congress-list'

export default function CongressoCientificoInternacional() {
  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/congressos" />

      <PageHeader>
        <PageHeaderIcon>
          <GraduationCap className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Congresso Científico Internacional</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Participe do nosso Congresso Científico Internacional, um evento
        dedicado à troca de conhecimentos e experiências entre pesquisadores e
        profissionais de diversas áreas.
      </PageDescription>

      <CongressList />
    </PageContainer>
  )
}
