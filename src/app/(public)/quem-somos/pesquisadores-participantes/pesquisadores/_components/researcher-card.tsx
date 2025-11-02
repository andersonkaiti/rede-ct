import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@components/ui/collapsible'
import UserProfileHoverCard from '@components/user-profile-hover-card'
import { getInitials } from '@utils/get-initials'
import {
  Book,
  BookOpen,
  Briefcase,
  Building2,
  ChevronUp,
  ExternalLink,
  GraduationCap,
  Hash,
  IdCard,
  Mail,
  Medal,
  Smile,
} from 'lucide-react'
import Link from 'next/link'
import { DEGREE_LABEL_MAP } from '../_constants/degrees'
import {
  type Seniority,
  seniorityMapping,
} from '../_hooks/use-researchers.hook'

interface IResearcherCardProps {
  researcher: {
    id: string
    createdAt: string
    updatedAt: string
    registrationNumber: string
    mainEtps: string | null
    formations: string | null
    degrees: Array<
      'DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE'
    >
    occupations: string
    seniority: Seniority
    institutions: string
    biography: string | null
    user: {
      id: string
      name: string
      emailAddress: string
      orcid: string | null
      lattesUrl: string | null
      avatarUrl: string | null
      phone: string | null
      createdAt: string
      updatedAt: string
      role: 'ADMIN' | 'USER'
    }
  }
}

export function ResearcherCard({ researcher }: IResearcherCardProps) {
  const { emailAddress, lattesUrl, orcid, name, avatarUrl } = researcher.user

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg border border-border bg-background">
      <header className="mb-2 flex flex-row items-center gap-4 p-6">
        <Avatar className="size-20 flex-shrink-0">
          <AvatarImage alt={`Avatar de ${name}`} src={avatarUrl ?? undefined} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-center gap-1">
          <UserProfileHoverCard
            avatarVisibility={false}
            user={researcher.user}
          />

          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            <Medal className="h-3.5 w-3.5" />
            <span className="truncate">
              {seniorityMapping[researcher.seniority as Seniority]}
            </span>

            {orcid && (
              <Button
                asChild
                className="ml-2 h-auto py-1 text-xs"
                variant="outline"
              >
                <Link
                  className="flex items-center gap-1"
                  href={`https://orcid.org/${orcid}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Ver perfil ORCID"
                >
                  <IdCard className="mr-1 inline size-4" />
                  <span>ORCID</span>
                </Link>
              </Button>
            )}
          </p>

          {researcher.createdAt && (
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Smile className="h-3.5 w-3.5" />
              Desde
              <span>
                {new Date(researcher.createdAt).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
          )}
        </div>
      </header>

      {researcher.biography && (
        <div className="p-6">
          <Collapsible className="group group space-y-4">
            <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="size-4" />
                <span>Ler biografia</span>
              </div>
              <ChevronUp className="size-4 transition group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <p className="whitespace-pre-line text-foreground text-sm leading-relaxed">
                {researcher.biography}
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}

      <div className="p-6">
        <h3 className="mb-3 font-semibold text-muted-foreground text-xs uppercase tracking-widest">
          Credenciais
        </h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {researcher.registrationNumber && (
            <div className="flex items-center gap-2">
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-muted p-2">
                <Hash className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-0.5 text-muted-foreground text-xs">
                  Matrícula
                </p>
                <p className="truncate font-medium text-foreground text-sm">
                  {researcher.registrationNumber}
                </p>
              </div>
            </div>
          )}

          {researcher.degrees && researcher.degrees.length > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-muted p-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex w-full flex-col justify-center">
                <p className="mb-0.5 text-muted-foreground text-xs">Títulos</p>
                <div className="mt-0.5 flex flex-wrap gap-1">
                  {researcher.degrees.map((degree) => (
                    <Badge
                      className="px-1.5 py-0 text-xs"
                      key={degree}
                      variant="secondary"
                    >
                      {DEGREE_LABEL_MAP[degree]}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {researcher.formations && (
            <div className="flex items-center gap-2">
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-muted p-2">
                <Book className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-0.5 text-muted-foreground text-xs">
                  Formações
                </p>
                <p className="truncate font-medium text-foreground text-sm">
                  {researcher.formations}
                </p>
              </div>
            </div>
          )}

          {researcher.mainEtps && (
            <div className="flex items-center gap-2">
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-muted p-2">
                <Medal className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-0.5 text-muted-foreground text-xs">
                  Principais ETPs
                </p>
                <p className="truncate font-medium text-foreground text-sm">
                  {researcher.mainEtps}
                </p>
              </div>
            </div>
          )}

          {researcher.institutions.length && (
            <div className="flex items-center gap-2">
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-muted p-2">
                <Building2 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-0.5 text-muted-foreground text-xs">
                  Instituições
                </p>
                <p className="font-medium text-foreground text-sm">
                  {researcher.institutions}
                </p>
              </div>
            </div>
          )}

          {researcher.occupations.length && (
            <div className="flex items-center gap-2">
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-muted p-2">
                <Briefcase className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-0.5 text-muted-foreground text-xs">
                  Ocupações
                </p>
                <p className="font-medium text-foreground text-sm">
                  {researcher.occupations}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-6">
        {emailAddress && (
          <Button asChild className="w-fit" size="sm" variant="ghost">
            <Link href={`mailto:${emailAddress}`}>
              <Mail className="mr-2 h-3.5 w-3.5" />
              <span className="truncate">{emailAddress}</span>
            </Link>
          </Button>
        )}

        {lattesUrl && (
          <Button asChild className="w-fit" size="sm" variant="ghost">
            <Link
              href={lattesUrl}
              rel="noopener noreferrer"
              target="_blank"
              title="Ver Currículo Lattes"
            >
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              <span>Lattes</span>
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
