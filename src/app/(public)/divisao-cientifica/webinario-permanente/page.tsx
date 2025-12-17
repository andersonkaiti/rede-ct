import { EarthIcon } from '@components/icons/earth'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { WebinarList } from './_components/webinar-list'

export default function WebinarioPermanente() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderIcon>
          <EarthIcon />
        </PageHeaderIcon>

        <PageHeaderTitle>Webinário Permanente da RedeCT</PageHeaderTitle>
      </PageHeader>

      <PageDescription>
        O Webinário Permanente da RedeCT foi criado como espaço midiático de
        diálogo, apresentação e divulgação dos trabalhos (pesquisas, projetos,
        livros) dos Pesquisadores Filiados e outros convidados. O acesso é livre
        e gratuito pelo Canal do Youtube da RedeCT, programe-se, participe,
        prestigie, veja aqui a PROGRAMAÇÃO DOS PRÓXIMOS WEBINARIOS.
      </PageDescription>

      <WebinarList />
    </PageContainer>
  )
}
