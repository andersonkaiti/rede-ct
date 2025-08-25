import { UserCardWrapper } from '@components/ui/user-card'
import { getTeams } from '@http/teams/get-teams'
import type { ITeam } from 'types/team'

import { UserCardComponent } from './_components/user-card'

export default async function EquipeDeGestao() {
  const teamsSections = await getTeams<ITeam[]>('equipe-de-gestao')

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <header className="mb-8 space-y-8">
        <h1 className="title-2">Conheça a equipe da RedeCT</h1>
        <p className="text-muted-foreground">
          Nossa equipe é formada por profissionais dedicados que trabalham para
          fortalecer a colaboração entre a academia e os povos tradicionais.
          Veja abaixo quem faz parte da gestão da RedeCT.
        </p>
      </header>

      {teamsSections.map((teamSection, index: number) => (
        <section className="space-y-4 md:space-y-8" key={index}>
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute right-1/4 left-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
            <h2 className="title-2 relative z-10 bg-background px-4 text-center">
              {teamSection.name}
            </h2>
          </div>

          <UserCardWrapper>
            {teamSection.team_members.map((member, memberIndex: number) => (
              <UserCardComponent key={memberIndex} member={member} />
            ))}
          </UserCardWrapper>
        </section>
      ))}
    </main>
  )
}
