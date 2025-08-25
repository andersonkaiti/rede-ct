import { UserCardWrapper } from '@components/ui/user-card'
import { getTeams } from '@http/teams/get-teams'
import type { ITeam } from 'types/team'

import { UserCardComponent } from './_components/user-card'

export default async function EquipeDeGestao() {
  const teamsSections = await getTeams<ITeam[]>('equipe-de-gestao')

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      {teamsSections.map((teamSection, index: number) => (
        <section className="space-y-4 md:space-y-8" key={index}>
          <h1 className="title-2 text-center">{teamSection.name}</h1>

          <div className="mx-auto h-[1px] w-1/2 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

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
