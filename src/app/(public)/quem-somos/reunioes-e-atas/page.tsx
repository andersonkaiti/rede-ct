import { FileTextIcon } from 'lucide-react'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { MeetingsList } from './_components/meetings-list'

export default function MeetingsAndMinutes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <FileTextIcon className="size-7" />
        </PageHeaderIcon>

        <PageHeaderTitle>Reuniões, Convocações, Pautas e Atas</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        Encontre aqui convocações, pautas e atas das reuniões gerais, setoriais
        e das vice-coordenadorias e GTs da Rede CT.
      </PageDescription>

      <MeetingsList />
    </PageContainer>
  )
}
