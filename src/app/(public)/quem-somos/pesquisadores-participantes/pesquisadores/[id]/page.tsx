import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { BackArrow } from '@components/ui/back-arrow'
import { Badge } from '@components/ui/badge'
import { Separator } from '@components/ui/separator'
import { ShareButton } from '@components/ui/share-button'
import { UserProfileHoverCard } from '@components/ui/user-profile-hover-card'
import { getResearcherById } from '@http/researchers/get-researcher-by-id'
import { formatDate } from '@utils/format-date'
import { getInitials } from '@utils/get-initials'
import { GraduationCap, Medal } from 'lucide-react'
import Link from 'next/link'
import {
  PageContainer,
  PageHeader,
  PageMain,
} from '../../../../_components/page-container'
import { DEGREE_LABEL_MAP, SENIORITY_LABEL_MAP } from '../_components/constants'

interface IResearcherDetailsProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: IResearcherDetailsProps) {
  const { id } = await params

  const researcher = await getResearcherById(id)

  return {
    title: researcher.user.name,
  }
}

export default async function ResearcherDetails({
  params,
}: IResearcherDetailsProps) {
  const { id } = await params

  const researcher = await getResearcherById(id)

  const { emailAddress, lattesUrl, orcid, name, avatarUrl, phone } =
    researcher.user

  return (
    <PageContainer>
      <BackArrow href="/quem-somos/pesquisadores-participantes/pesquisadores" />

      <PageHeader className="flex-col items-start gap-8">
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Avatar className="size-24 shrink-0">
            <AvatarImage
              alt={`Avatar de ${name}`}
              src={avatarUrl ?? undefined}
            />
            <AvatarFallback className="text-2xl">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <UserProfileHoverCard
              user={researcher.user}
              avatarVisibility={false}
            />

            <div className="ml-2 flex items-center gap-1 text-muted-foreground text-sm">
              <Medal className="size-3.5" />
              <span>{SENIORITY_LABEL_MAP[researcher.seniority]}</span>
            </div>

            {researcher.createdAt && (
              <div className="ml-2 flex items-center gap-1 text-muted-foreground text-sm">
                Membro desde
                <span>
                  {new Date(researcher.createdAt).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        <time className="flex items-center gap-x-1 text-muted-foreground text-sm">
          Última atualização em {formatDate(String(researcher.updatedAt))}
        </time>

        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex w-full flex-wrap gap-2">
              {researcher.degrees.map((degree) => (
                <Badge key={degree} variant="secondary">
                  <GraduationCap className="mr-1 h-3.5 w-3.5" />
                  {DEGREE_LABEL_MAP[degree]}
                </Badge>
              ))}
            </div>

            <ShareButton title={name} text={name} />
          </div>

          <Separator />
        </div>
      </PageHeader>

      <PageMain className="space-y-7">
        {researcher.biography && (
          <div className="space-y-3">
            <h2 className="text-muted-foreground">Biografia</h2>
            <p className="whitespace-pre-line text-justify">
              {researcher.biography}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
          {researcher.registrationNumber && (
            <div className="space-y-1">
              <p className="text-muted-foreground">Matrícula</p>
              <p className="text-justify text-foreground">
                {researcher.registrationNumber}
              </p>
            </div>
          )}

          {researcher.formations && (
            <div className="space-y-1">
              <p className="text-muted-foreground">Formações</p>
              <p className="text-justify text-foreground">
                {researcher.formations}
              </p>
            </div>
          )}

          {researcher.mainEtps && (
            <div className="space-y-1">
              <p className="text-muted-foreground">Principais ETPs</p>
              <p className="text-justify text-foreground">
                {researcher.mainEtps}
              </p>
            </div>
          )}

          {researcher.institutions && (
            <div className="space-y-1">
              <p className="text-muted-foreground">Instituições</p>
              <p className="text-justify text-foreground">
                {researcher.institutions}
              </p>
            </div>
          )}

          {researcher.occupations && (
            <div className="space-y-1">
              <p className="text-muted-foreground">Ocupações</p>
              <p className="text-justify text-foreground">
                {researcher.occupations}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-muted-foreground">Contatos e Links</h2>

          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
            {emailAddress && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Email</h2>
                <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
              </div>
            )}

            {phone && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Telefone</h2>
                <Link href={`tel:${phone}`}>{phone}</Link>
              </div>
            )}

            {lattesUrl && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">Currículo Lattes</h2>
                <Link
                  href={lattesUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Ver Currículo Lattes"
                >
                  Clique aqui para ver o currículo Lattes
                </Link>
              </div>
            )}

            {orcid && (
              <div className="space-y-1">
                <h2 className="text-muted-foreground">ORCID</h2>
                <Link
                  href={`https://orcid.org/${orcid}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Ver perfil ORCID"
                >
                  ORCID
                </Link>
              </div>
            )}
          </div>
        </div>
      </PageMain>
    </PageContainer>
  )
}
