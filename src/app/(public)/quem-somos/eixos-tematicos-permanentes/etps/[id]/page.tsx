import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { Separator } from '@components/ui/separator'
import { ShareButton } from '@components/ui/share-button'
import { getETPById } from '@http/etps/get-etp-by-id'
import { formatDate } from '@utils/format-date'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'
import { ETPCoordenation } from '../_components/etp-coordenation'
import { GTMembers } from '../_components/gt-members'

interface IETPDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IETPDetailsProps) {
  const { id } = await params

  const etp = await getETPById(id)

  return {
    title: etp.title,
  }
}

export default async function ETPDetails({ params }: IETPDetailsProps) {
  const { id } = await params

  const etp = await getETPById(id)

  const coordination = []

  if (etp.leader) {
    coordination.push(etp.leader.researcher)
  }

  if (etp.deputyLeader) {
    coordination.push(etp.deputyLeader.researcher)
  }

  if (etp.secretary) {
    coordination.push(etp.secretary.researcher)
  }

  const coordinationIds = coordination.map((member) => member.id)

  const regularMembers = etp.members.filter(
    (member) => !coordinationIds.includes(member.id),
  )

  const workingGroup = [...coordination, ...regularMembers]

  return (
    <PageContainer>
      <BackArrow href="/quem-somos/eixos-tematicos-permanentes/etps" />

      <PageHeader className="flex-col items-start gap-8">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="max-w-4xl text-balance font-bold text-5xl tracking-tight">
            {etp.title}
          </h1>

          <Badge className="whitespace-nowrap rounded-full bg-primary/20 px-4 py-1 font-semibold text-primary">
            {etp.code}
          </Badge>
        </div>

        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <time className="text-muted-foreground text-sm">
              Última atualização em {formatDate(String(etp.updatedAt))}
            </time>

            <div className="flex items-center justify-end">
              <ShareButton title={etp.title} text={etp.title} />
            </div>
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="space-y-8">
        {etp.description && (
          <div className="space-y-2">
            <h2 className="font-semibold text-muted-foreground text-xl">
              Descrição
            </h2>
            <p className="whitespace-pre-wrap text-justify leading-relaxed">
              {etp.description}
            </p>
          </div>
        )}

        {coordination.length > 0 && <ETPCoordenation members={coordination} />}

        {workingGroup.length > 0 && <GTMembers members={workingGroup} />}

        {etp.notes && (
          <div className="space-y-2">
            <h2 className="font-semibold text-muted-foreground text-xl">
              Sobre o Grupo de Trabalho
            </h2>
            <p className="whitespace-pre-wrap text-justify leading-relaxed">
              {etp.notes}
            </p>
          </div>
        )}
      </PageMain>
    </PageContainer>
  )
}
