import { EarthIcon } from '@components/icons/earth'
import { Separator } from '@components/ui/separator'
import { Skeleton } from '@components/ui/skeleton'
import {
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderIcon,
  PageHeaderTitle,
} from '../../_components/page-container'
import { LoadingSkeleton } from './_components/loading-skeleton'

export default function Loading() {
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

      <div className="flex w-full gap-2 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex w-full gap-2 sm:w-fit">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-9 w-10" />
        </div>
      </div>

      <LoadingSkeleton />

      <Separator />

      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-52" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
          <Skeleton className="h-9 w-9" />
        </div>
      </div>
    </PageContainer>
  )
}
