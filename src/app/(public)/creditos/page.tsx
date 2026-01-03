import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import { getInitials } from '@utils/get-initials'
import {
  PageContainer,
  PageHeader,
  PageHeaderTitle,
  PageMain,
} from '../_components/page-container'

interface ITeamMember {
  name: string
  role: string
}

export default function Credits() {
  const teamMembers: ITeamMember[] = [
    {
      name: 'Anderson Kaiti',
      role: 'Desenvolvedor',
    },
    {
      name: 'Kevin Lopes',
      role: 'Desenvolvedor',
    },
    {
      name: 'Mateus Saluceste',
      role: 'Desenvolvedor',
    },
    {
      name: 'Wagner Zanin',
      role: 'Desenvolvedor',
    },
  ]

  return (
    <PageContainer className="py-20 md:py-30 lg:p-40">
      <PageHeader className="justify-center">
        <PageHeaderTitle>Creditos</PageHeaderTitle>
      </PageHeader>

      <PageMain>
        <section className="mb-10 text-center md:space-y-14 md:py-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 place-items-start gap-8 sm:place-items-center md:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4">
                <Avatar className="size-12">
                  <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                  <AvatarImage />
                </Avatar>
                <div className="flex flex-col items-start">
                  <p>{member.name}</p>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex sm:justify-center">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarFallback>
                  {getInitials('Elvio Gilberto da Silva')}
                </AvatarFallback>
                <AvatarImage />
              </Avatar>
              <div className="flex flex-col items-start">
                <p>Elvio Gilberto da Silva</p>
                <p className="text-muted-foreground text-sm">Orientador</p>
              </div>
            </div>
          </div>
        </section>

        <p className="whitespace-normal text-center text-muted-foreground">
          Obrigado por fazerem parte deste projeto! 🎉
        </p>
      </PageMain>
    </PageContainer>
  )
}
