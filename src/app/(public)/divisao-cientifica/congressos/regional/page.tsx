import { BackArrow } from '@components/ui/back-arrow'
import { MapIcon } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../../_components/page-container'
import { RegionalCongressesList } from './_components/regional-congresses-list'

export default function RegionalCongress() {
  return (
    <PageContainer>
      <BackArrow href="/divisao-cientifica/congressos" />

      <PageHeader>
        <PageHeaderIcon>
          <MapIcon className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Congresso Regional</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Participe do nosso Congresso Regional, um evento dedicado à troca de
        conhecimentos e experiências entre pesquisadores e profissionais
        regionais.
      </PageDescription>

      <RegionalCongressesList />
    </PageContainer>
  )
}
