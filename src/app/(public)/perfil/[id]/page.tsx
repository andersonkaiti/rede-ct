import { CalendarDaysIcon } from '@components/icons/calendar-days'
import { FileTextIcon } from '@components/icons/file-text'
import { IdCardIcon } from '@components/icons/id-card'
import { MailCheckIcon } from '@components/icons/mail-check'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { BackArrow } from '@components/ui/back-arrow'
import { Separator } from '@components/ui/separator'
import { getUser } from '@http/users/get-user'
import { getInitials } from '@utils/get-initials'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { NotFound } from './_components/not-found'

interface IUserProfileProps {
  params: Promise<{
    id: string
  }>
}

export default async function UserProfile({ params }: IUserProfileProps) {
  const { id } = await params

  const user = await getUser(id)

  if (!user) {
    return <NotFound />
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />

      <div className="space-y-14">
        <h1 className="flex items-center gap-2 font-bold text-3xl">
          Perfil do Usuário
        </h1>

        <Separator />
      </div>

      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Avatar className="size-30 shadow-lg sm:size-50">
          <AvatarImage alt={user.name} src={user.avatarUrl || undefined} />
          <AvatarFallback className="font-semibold text-2xl">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex h-full w-full flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col items-center gap-1 md:items-start">
              <h2 className="text-balance font-semibold text-2xl">
                {user.name}
              </h2>
              <span className="font-semibold text-muted-foreground text-sm">
                {user.role === 'ADMIN' ? 'Administrador' : 'Usuário'}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MailCheckIcon size={16} />
                {user.emailAddress}
              </div>

              {user.phone && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone className="size-4" /> Telefone: {user.phone}
                </div>
              )}

              {user.orcid && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <IdCardIcon size={16} /> ORCID: {user.orcid}
                </div>
              )}

              {user.lattesUrl && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <FileTextIcon size={16} /> Lattes:
                  <Link
                    className="break-all underline"
                    href={user.lattesUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {user.lattesUrl}
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex h-full justify-between gap-4 sm:flex-col">
            <div className="flex items-center text-sm">
              <CalendarDaysIcon
                className="mr-2 text-muted-foreground"
                size={20}
              />
              <div className="flex flex-col">
                <span className="font-medium text-muted-foreground">
                  Criado em:
                </span>
                <span className="text-xs">
                  {new Date(user.createdAt).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>

            <div className="flex items-center sm:hidden">
              <Separator className="h-8" orientation="vertical" />
            </div>

            <div className="flex items-center text-sm">
              <CalendarDaysIcon
                className="mr-2 text-muted-foreground"
                size={20}
              />
              <div className="flex flex-col">
                <span className="font-medium text-muted-foreground">
                  Atualizado em:
                </span>
                <span className="text-xs">
                  {new Date(user.updatedAt).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
