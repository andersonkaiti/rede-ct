import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { ShareButton } from '@components/ui/share-button'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { getResearchGroupById } from '@http/research-groups/get-research-group-by-id'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../_components/page-container'
import { ResearchGroupButton } from './_components/research-group-button'

interface IResearchGroupDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IResearchGroupDetailsProps) {
  const { id } = await params

  const researchGroup = await getResearchGroupById(id)

  return {
    title: researchGroup.name,
  }
}

export default async function ResearchGroupDetails({
  params,
}: IResearchGroupDetailsProps) {
  const { id } = await params

  const researchGroup = await getResearchGroupById(id)

  const formattedUpdatedAt = format(
    researchGroup.updatedAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  const formattedFoundedAt = format(
    researchGroup.foundedAt,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    { locale: ptBR },
  )

  return (
    <PageContainer>
      <BackArrow href="/portfolio/grupo-de-pesquisa" />

      <PageHeader className="flex-col items-start gap-8">
        <h1 className="font-bold text-5xl tracking-tight">
          {researchGroup.name}
        </h1>

        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <time className="text-muted-foreground text-sm">
            Última atualização em {formattedUpdatedAt}
          </time>

          <ShareButton title={researchGroup.name} text={researchGroup.name} />
        </div>
      </PageHeader>

      <PageMain className="gap-10">
        {researchGroup.logoUrl && (
          <div className="relative h-88 w-full overflow-hidden">
            <Image
              alt={researchGroup.name}
              className="rounded-md object-cover"
              fill
              src={researchGroup.logoUrl}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        )}

        <div className="mt-4 space-y-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <section className="space-y-2">
              <h2 className="flex items-center text-muted-foreground">Líder</h2>

              <UserProfileHoverCard user={researchGroup.leader} />
            </section>

            <section className="space-y-2">
              <h2 className="flex items-center text-muted-foreground">
                Vice-Líder
              </h2>

              <UserProfileHoverCard user={researchGroup.deputyLeader} />
            </section>
          </div>

          <Separator />
        </div>

        <section className="space-y-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Fundado em</h2>
              <p>{formattedFoundedAt}</p>
            </div>

            {researchGroup.acronym && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Sigla</h2>
                <p>{researchGroup.acronym}</p>
              </div>
            )}

            {researchGroup.email && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">E-mail</h2>
                <p>{researchGroup.email}</p>
              </div>
            )}
          </div>

          {researchGroup.scope && (
            <div className="space-y-1">
              <h2 className="text-muted-foreground">Escopo</h2>
              <p className="text-justify">{researchGroup.scope}</p>
            </div>
          )}

          {researchGroup.description && (
            <p className="whitespace-pre-wrap text-justify">
              {researchGroup.description}
            </p>
          )}

          <ResearchGroupButton url={researchGroup.url} />
        </section>
      </PageMain>
    </PageContainer>
  )
}
