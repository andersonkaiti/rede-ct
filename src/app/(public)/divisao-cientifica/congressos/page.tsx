import { EarthIcon } from '@components/icons/earth'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { InternationalCongressCard } from './_components/international-congress'
import { RegionalCongressCard } from './_components/regional-congress'

export default function Congressos() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <EarthIcon className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Congressos da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Explore nossos eventos científicos internacionais e regionais.
        Conecte-se com pesquisadores, compartilhe conhecimento e contribua para
        o avanço da ciência em povos originários e comunidades tradicionais.
      </PageDescription>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InternationalCongressCard />

        <RegionalCongressCard />
      </section>
    </PageContainer>
  )
}
