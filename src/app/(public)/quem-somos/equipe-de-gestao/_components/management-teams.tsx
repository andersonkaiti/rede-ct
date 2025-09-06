import { UserCardRedLine, UserCardWrapper } from '@components/ui/user-card'
import { getTeams } from '@http/teams/get-teams'
import type { ITeam } from 'types/team'
import { UserCardComponent } from './user-card'

const TEAM_TYPE = 'equipe-de-gestao'

export async function ManagementTeams() {
  const teamsSections = await getTeams<ITeam[]>({ type: TEAM_TYPE })

  return (
    <>
      {teamsSections.map((teamSection, index: number) => (
        <section className="space-y-4 md:space-y-8" key={index}>
          <div className="space-y-8">
            <h2 className="title-2 relative z-10 bg-background px-4 text-center">
              {teamSection.name}
            </h2>
            <UserCardRedLine />
          </div>

          <UserCardWrapper>
            {teamSection.members.map((member, memberIndex: number) => (
              <UserCardComponent key={memberIndex} member={member} />
            ))}
          </UserCardWrapper>
        </section>
      ))}
    </>
  )
}
