import { CalendarDaysIcon } from '@components/icons/calendar-days'
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

const DynamicEvents = dynamic(() =>
  import('./_components/events').then((mod) => mod.Events),
)

export default function CalendarioDeEventos() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <CalendarDaysIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Calendário de eventos</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Nesta seção são divulgados os eventos científicos relacionados direta ou
        indiretamente à pauta central da RedeCT (também os eventos que não são
        conduzidos pelos Pesquisadores Filiados, mas de interesse destes).
      </PageDescription>

      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicEvents />
      </Suspense>

      <footer className="text-justify text-lg text-muted-foreground">
        <p>
          A RedeCT promove e divulga diversos eventos científicos ao longo do
          ano, incluindo seminários, workshops, congressos e webinars. Estes
          eventos são oportunidades para a comunidade acadêmica se reunir,
          compartilhar conhecimentos e fortalecer a rede de colaboração
          científica.
        </p>
      </footer>
    </PageContainer>
  )
}
