import { Card, CardContent } from '@components/ui/card'
import {
  type IResearcher,
  type Seniority,
  seniorityMapping,
} from '@mocks/researchers'
import { ExternalLink, GraduationCap, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface IResearcherCardProps {
  researcher: IResearcher
}

export function ResearcherCard({
  researcher: { seniority, user, description },
}: IResearcherCardProps) {
  const {
    first_name,
    last_name,
    profile_image_url,
    image_url,
    email_addresses,
    lattesUrl,
  } = user

  const name = `${first_name} ${last_name}`
  const email =
    email_addresses && email_addresses.length > 0
      ? email_addresses[0].email_address
      : undefined

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-white via-background to-primary/10 shadow-lg transition-all hover:shadow-xl dark:from-background dark:via-background dark:to-primary/10 dark:[background-image:linear-gradient(to_bottom_right,var(--background),var(--background),rgba(244,63,94,0.08))]">
      <div className="-top-6 pointer-events-none absolute right-4 select-none text-primary opacity-20 dark:text-primary">
        <GraduationCap className="size-20" />
      </div>
      <CardContent className="flex flex-grow flex-col justify-between gap-3 px-4 pt-8 pb-4">
        <div className="flex items-center gap-3">
          {profile_image_url || image_url ? (
            <Image
              alt={name}
              className="size-10 rounded-full border border-primary/30 object-cover"
              height={40}
              src={profile_image_url || image_url || ''}
              width={40}
            />
          ) : null}
          <span className="flex items-center gap-2 font-bold text-foreground text-lg dark:text-white">
            {name}
          </span>
        </div>
        <span className="font-semibold text-primary text-xs uppercase tracking-wide">
          {seniorityMapping[seniority as Seniority] || seniority}
        </span>
        <div className="flex flex-col gap-1 text-muted-foreground text-sm dark:text-white">
          {description}
        </div>
        <div className="mt-2 flex flex-wrap gap-3">
          {email && (
            <Link
              className="flex items-center gap-1 rounded bg-primary/10 px-2 py-1 font-medium text-primary text-xs transition hover:bg-primary/20"
              href={`mailto:${email}`}
              rel="noopener noreferrer"
              target="_blank"
              title={`Enviar e-mail para ${email}`}
            >
              <Mail className="size-4" />
              <span>{email}</span>
            </Link>
          )}
          {lattesUrl && lattesUrl.trim() !== '' && (
            <Link
              className="flex items-center gap-1 rounded bg-primary/10 px-2 py-1 font-medium text-primary text-xs transition hover:bg-primary/20"
              href={lattesUrl}
              rel="noopener noreferrer"
              target="_blank"
              title="Ver currículo Lattes"
            >
              <ExternalLink className="size-4" />
              <span>Lattes</span>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
