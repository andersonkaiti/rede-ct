import { CalendarDaysIcon } from '@components/icons/calendar-days'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { Events } from './_components/events'

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

      <Events />
    </PageContainer>
  )
}
