import { UsersIcon } from '@components/icons/users'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { PartnersList } from './_components/partners-list'

export default function PartnersAndFunders() {
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

      <PartnersList />
    </PageContainer>
  )
}
